const express = require("express")
// --------------------------------
const { auth } = require("../middlewares/auth")
const { getMyFeedController } = require("../controllers/feed")

const Router = express.Router()

Router.get("/", auth, getMyFeedController)

module.exports.feedRoutes = Router