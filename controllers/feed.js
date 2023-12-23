const { Connections } = require("../models/connection")
const { Messages } = require("../models/message")


async function getMyFeedController(req, res) {
  const { user } = req

  const searchConnections = await Connections.find({ followedBy: user._id })
  const mappedFollowedToIds = searchConnections.map(connection => connection.followedTo)

  const searchedMessages = await Messages
    .find({
      $or: [
        { user: user._id },
        { user: { $in: mappedFollowedToIds } }
      ]
    })
    .populate({
      path: 'user',

      // Excluding the password field from populated data
      select: '-password'
    })
    .sort({ timestamp: -1 })

  res.status(200).send({ message: "messages fetched successfully", responseData: searchedMessages })


}

module.exports.getMyFeedController = getMyFeedController