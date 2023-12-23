const express = require("express")
// --------------------------------
const { auth } = require("../middlewares/auth")
const { getMyFeedController } = require("../controllers/feed")

const Router = express.Router()

// I have handled the async error as a separate middleware to avoid try catch
// repetitions and improve code readability

Router.get("/", auth, getMyFeedController)

module.exports.feedRoutes = Router