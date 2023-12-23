const express = require("express")
const { auth } = require("../middlewares/auth")
const { Connections, validateConnection } = require("../models/connection")
const { Users } = require("../models/user")
const Router = express.Router()

Router.post("/", auth, async (req, res) => {
  const { user } = req
  const { followedTo } = req.body

  // validation check of req.body
  const { error } = validateConnection(req.body)
  if (error) return res.status(400).send({ message: error.message })

  if(followedTo.toString() === user._id.toString()) return res.status(400).send({ message: "you can not follow yourself" })

  const searchFollowedToUser = await Users.findById(followedTo)
  if (!searchFollowedToUser) return res.status(404).send({ message: "user not found with given _id in 'followedTo'" })

  const checkWhetherAlreadyFollowed = await Connections.findOne({followedBy: user._id, followedTo})
  if(checkWhetherAlreadyFollowed) return res.status(400).send({ message: "you are already following this account" })

  const createdConnection = new Connections({
    followedBy: user._id,
    followedTo: searchFollowedToUser._id
  })

  const savedData = await createdConnection.save()
  const toSendData = await savedData.populate({
    path: 'followedBy followedTo',

    // Excluding the password field from populated data
    select: '-password'
  })


  res.status(201).send({
    message: `You are now following ${searchFollowedToUser.name}`,
    responseData: toSendData
  })


})

module.exports.followUserRoute = Router