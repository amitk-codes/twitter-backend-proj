const mongoose = require("mongoose")
const JOI = require('joi')


const messageSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
})

const Messages = mongoose.model(messageSchema)

function validateMessage(input) {
  // using joi for backend validations
  const joiSchema = JOI.object({
    user: JOI.string().required(),
    content: JOI.string().required()
  })
  return joiSchema.validate(input)
}


module.exports.Messages = Messages
module.exports.validateMessage = validateMessage