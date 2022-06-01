import express from "express";
import bodyParser from "body-parser"
import viewEngie from "./config/viewEngine"
import initWebRoutes from "./route/web"
import connectDB from './config/connectDB'
require('dotenv').config()
let app = express()

//config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngie(app)
initWebRoutes(app)

// ADD THIS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
connectDB()

let port = process.env.PORT || 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port: " + port)
})