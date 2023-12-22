require('dotenv').config()
const express = require("express")
const app = express()
const mongo_connection = require('./db/mongo_connection')
const { userRoutes } = require('./routes/user')

app.use(express.json())
mongo_connection()


app.use("/", userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`App is listening on Port ${PORT}`))