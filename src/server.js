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
var cors = require('cors');
app.use(cors());
connectDB()

let port = process.env.PORT || 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port: " + port)
})