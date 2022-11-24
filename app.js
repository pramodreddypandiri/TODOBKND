const express = require("express");
const userRoutes = require('./routes/userRoutes');
const app = express()
const connectToDB = require("./config/db")

//middle ware
app.use(express.json)
app.use(express.urlencoded({ extended: true}))
// routes
connectToDB()
app.use('/', userRoutes)


module.exports = app