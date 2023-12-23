const jwt = require('jsonwebtoken');
const { Users } = require('../models/user');
const _ = require('lodash')


const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    let user = await Users.findOne({ _id: decoded._id })

    user = _.omit(JSON.parse(JSON.stringify(user)), ['password'])
    // removing the password property to avoid security leaks

    req.user = user
    req.token = token
    next()
  } catch (err) {
    console.log('auth error', err)
    return res.status(401).json({ message: 'Not Authorised to perform this task' })
  }

}

module.exports.auth = auth