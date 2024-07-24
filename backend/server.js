const cors = require('cors')
const express = require('express');
const colors = require('colors')    //for colors in console 
require('dotenv').config() //for accessing .env file 
const ConnectDb = require('./config/db.js')  // ConnectDb function for connection to mongodb DB
const bodyParser = require('body-parser');     //Middleware


const app = express();
const port = process.env.port ;


//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())



ConnectDb();



//apis
app.use('/api/user' , require('./routes/userroutes.js'))





//server start 
app.listen(8000, function(){
    console.log(`started at 8000` )
})