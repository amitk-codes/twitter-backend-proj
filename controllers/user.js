const bcrypt = require('bcrypt')
// ----------------------------------
const { validateUser, Users } = require("../models/user")
const { omitPasswordKey } = require("../utils/util_functions")


async function signupController(req, res) {
  const { name, email, password } = req.body

  const { error } = validateUser(req.body)
  if (error) return res.status(400).json({ message: error.message })
  // validation check 

  let searchedUser = await Users.findOne({ email })
  if (searchedUser) return res.status(400).json({ message: 'Email is already used' })

  const createdUser = new Users({ name, email, password })
  await createdUser.save()

  const toSend = omitPasswordKey(createdUser)
  // removing the password property from createdUser to avoid security leaks

  res.status(201).send({ message: 'Registered Successfully', responseData: toSend })
}

async function loginController(req, res) {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).send({ message: "email and password are required" })

  const searchedUser = await Users.findOne({ email })
  if (!searchedUser) return res.status(400).send({ message: 'Incorrect email or password' })

  const checkPassword = await bcrypt.compare(password, searchedUser.password)
  if (!checkPassword) return res.status(400).send({ message: 'Incorrect email or password' })

  const token = await searchedUser.generateToken()
  const toSendUserDetails = omitPasswordKey(searchedUser)
  // removing the password property from searchedUser to avoid security leaks

  res.setHeader('Authorization', 'Bearer ' + token);
  res.status(200).send({
    message: 'User logged In',
    responseData: {
      userDetails: toSendUserDetails,
      token
    }
  })
}

module.exports.signupController = signupController
module.exports.loginController = loginController