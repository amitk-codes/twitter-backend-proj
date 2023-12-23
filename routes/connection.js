const express = require("express")
// --------------------------------
const { auth } = require("../middlewares/auth")
const { followUserController } = require("../controllers/connection")

const Router = express.Router()

Router.post("/", auth, followUserController)

module.exports.followUserRoute = Router