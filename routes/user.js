const express = require("express")
// ----------------------------------
const { signupController, loginController } = require("../controllers/user")

const Router = express.Router()

// I have handled the async error as a separate middleware to avoid try catch
// repetitions and improve code readability

Router.post('/signup', signupController)

Router.post('/login', loginController)


module.exports.userRoutes = Router