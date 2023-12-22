const mongoose = require('mongoose')

const DB = process.env.DB_CONNECTION_URL

module.exports = () => {
  mongoose.connect(DB)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('Connection to MongoDB failed', err))
}