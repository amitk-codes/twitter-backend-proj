const express = require("express")

const Router = express.Router()

Router.get("/", async (req, res) => {
  res.status(200).send({message: "Hello, the server is running :)"})
})

module.exports.welcomeRoute = Router