const express = require("express");
const routes = require('./routes')
const PORT = 5000;

const { app,unknownEndpoint, errorHandler  } = require('./midlewares/app')
const db = require('./db/connection')

app.get("/", (req, res) => {
  res.send(200, { message: "Bienvenido a Api Task" });
});
app.use('/api', routes)
app.listen(PORT, () => {
  console.log(`Server is running... in port ${PORT}`);
});

app.get('/', (req, res)=>{
    res.send(200,{message: 'Bienvenido a Api Task'})
})
app.use(unknownEndpoint)
app.use(errorHandler)


app.listen(PORT, () => { console.log(`Server is running... in port ${PORT}`) });

