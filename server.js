const express = require("express");
const PORT = 5000;

<<<<<<< HEAD
const { app } = require('./midlewares')
const db = require('./db/connection')
=======
const { app } = require("./midlewares");
>>>>>>> 6835e2621d83c397a2bb70209ff4ce544dc45c6e

app.get("/", (req, res) => {
  res.send(200, { message: "Bienvenido a Api Task" });
});

app.listen(PORT, () => {
  console.log(`Server is running... in port ${PORT}`);
});

app.listen(5000, () => {
  console.log("Server is running...");
});
