const express = require("express");
require("../src/db/mongoose");
const bookingsRouter = require("./routers/bookings");

const app = express();

app.use(express.json());
app.use(bookingsRouter);

module.exports = app;
