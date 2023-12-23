const express = require("express")
const { auth } = require("../middlewares/auth")
const { validateMessage, Messages } = require("../models/message")
const Router = express.Router()

Router.post("/", auth, async (req, res) => {
  const {user} = req
  const {content} = req.body

  const { error } = validateMessage(req.body)
  if (error) return res.status(400).send({ message: error.message })

  const createdMessage = new Messages({
    user: user._id,
    content
  })

  const savedData = await createdMessage.save()
  const toSendData = await savedData.populate({
    path: 'user',

    // Excluding the password field from populated data
    select: '-password'
  })

  res.status(201).send({message: "message saved successfully", responseData: toSendData})

})

module.exports.postMessageRoute = Router