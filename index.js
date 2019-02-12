const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const models = require('./models/all-models');

const router = require('./route');
const app  = express();

// set bodyparser middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/api',router);

app.listen(3000,function(){
    console.log("Server is started!");
});