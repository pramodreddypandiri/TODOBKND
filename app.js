const express = require("express");
const userRoutes = require('./routes/userRoutes');
const app = express()

app.get('/', userRoutes)


module.exports = app