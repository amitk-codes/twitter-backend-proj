const express = require("express")
// ----------------------------------
const { signupController, loginController } = require("../controllers/user")

const Router = express.Router()

Router.post('/signup', signupController)

Router.post('/login', loginController)


module.exports.userRoutes = Router