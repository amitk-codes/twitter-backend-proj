const express = require("express")
// --------------------------------
const { auth } = require("../middlewares/auth")
const { postMessageController } = require("../controllers/message")

const Router = express.Router()

Router.post("/", auth, postMessageController)

module.exports.postMessageRoute = Router