const mongoose = require('mongoose')
const JOI = require('joi')
// ----------------------------------
const { JoiObjectIdValidation } = require('../utils/util_functions')

const connectionSchema = new mongoose.Schema({
  followedBy: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
  followedTo: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
  timestamp: { type: Date, default: Date.now }
})

const Connections = mongoose.model('connection', connectionSchema)

function validateConnection(input) {
  // Using joi library for backend validations
  const joiSchema = JOI.object({
    followedTo: JoiObjectIdValidation().required()
  })
  return joiSchema.validate(input)
}

module.exports.Connections = Connections
module.exports.validateConnection = validateConnection