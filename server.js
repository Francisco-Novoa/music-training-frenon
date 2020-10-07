<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const app = express();

app.use(cors({ credentials: true }));

app.use(helmet());

app.use(bodyParser.json());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny"));
=======
const express = require("express")
const PORT = 5000;

const { app } = require('./midlewares')



app.get('/', (req, res)=>{
    res.send(200,{message: 'Bienvenido a Api Task'})
})

app.listen(PORT, () => { console.log(`Server is running... in port ${PORT}`) });
>>>>>>> 5b921d74b7c476063dc3dc79fa5bd27125a5d459

app.listen(5000, () => {
  console.log("Server is running...");
});
