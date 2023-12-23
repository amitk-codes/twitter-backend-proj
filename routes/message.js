const express = require("express")
// --------------------------------
const { auth } = require("../middlewares/auth")
const { postMessageController } = require("../controllers/message")

const Router = express.Router()

// I have handled the async error as a separate middleware to avoid try catch
// repetitions and improve code readability

Router.post("/", auth, postMessageController)

module.exports.postMessageRoute = Router