const express = require("express")
// --------------------------------
const { auth } = require("../middlewares/auth")
const { followUserController } = require("../controllers/connection")

const Router = express.Router()

// I have handled the async error as a separate middleware to avoid try catch
// repetitions and improve code readability

Router.post("/", auth, followUserController)

module.exports.followUserRoute = Router