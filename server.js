const express = require("express");
const routes = require("./routes");
const PORT = 5000;

const { app, unknownEndpoint, errorHandler } = require("./midlewares/app");
require("./db/connection");

app.use("/api", routes);
app.listen(PORT, () => {
  console.log(`Server is running... in port ${PORT}`);
});

app.use(unknownEndpoint);
app.use(errorHandler);
