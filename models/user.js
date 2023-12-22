const mongoose = require('mongoose')
const JOI = require('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { emailRegex } = require('../utils/constants')

const userSchema = new mongoose.Schema({
  name: { type: String, minLength: 2, required: true },
  password: { type: String, minLength: 8, required: true },
  email: {
    type: String, unique: true, required: true, validate: {
      validator: function (value) {
        return emailRegex.test(value)
      },
      message: "Enter a valid email address"
    }
  }
})


userSchema.methods.generateToken = async function () {
  // created a separate method in userSchema for generating jwt tokens
  const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "5d" })
  return token
}

userSchema.pre('save', async function (next) {
  // hashing the password while saving the users
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const Users = mongoose.model('user', userSchema)

function validateUser(input) {
  // using joi for backend validations
  const joiSchema = JOI.object({
    name: JOI.string().min(2).required(),
    email: JOI.string().email().required(),
    password: JOI.string().min(8).required()
  })
  return joiSchema.validate(input)

}


module.exports.Users = Users
module.exports.validateUser = validateUser
