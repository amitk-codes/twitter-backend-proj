require('dotenv').config()
require('express-async-errors');
const express = require("express")
// ----------------------------------
const mongo_connection = require('./db/mongo_connection')
const { IndexRoutes } = require('./routes/index_routes_arr')

const app = express()

app.use(express.json())
mongo_connection()

IndexRoutes.forEach(({path, router}) => {
  app.use(path, router)
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`App is listening on Port ${PORT}`))