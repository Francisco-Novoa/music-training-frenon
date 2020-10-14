const express = require('express');
const cors = require("cors")
const morgan = require("morgan")
const helmet = require("helmet")
const methodOverride = require("method-override")
const unknownEndpoint = require("./unknownEndpoint")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');

const app = express();

app.use(cors({credentials: true}));
app.use(helmet());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(unknownEndpoint)
app.use(morgan("tiny"));



module.exports = { app }