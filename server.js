const express = require("express");
const routes = require("./routes");
const PORT = 5000;

const { app, unknownEndpoint, errorHandler } = require("./midlewares/app");
require("./db/connection");

app.get("/", (req, res) => {
  res.send(200, { message: "Bienvenido a Api Task" });
});

app.use('/api', routes)

app.use(unknownEndpoint)
app.use(errorHandler)





