require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./route/userRoute");
const dbConnection = require("./config/connection");
// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();
app.use("/", userRoute);

module.exports = app;
