require('dotenv').config()
const express = require("express")
const app = express()
const mongo_connection = require('./db/mongo_connection')
const { userRoutes } = require('./routes/user')
const { followUserRoute } = require('./routes/connection')
const { postMessageRoute } = require('./routes/message')
const { feedRoutes } = require('./routes/feed')

app.use(express.json())
mongo_connection()


app.use("/", userRoutes)
app.use("/follow-user", followUserRoute)
app.use("/post-message", postMessageRoute)
app.use("/get-my-feed", feedRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`App is listening on Port ${PORT}`))