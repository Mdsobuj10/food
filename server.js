const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const path = require('path');
//const ejs = require('ejs');
const PageRoutes = require('./routes/PageRoutes');
const expresLayouts = require('express-ejs-layouts')



// expreszs init 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false}));


app.use(express.static('public'));




// esj init
app.set("view engine", "ejs");
app.use(expresLayouts);
app.set("layout", "layouts/app");



//router manes  system
 app.use(PageRoutes);


// server port is runig 
const PORT = process.env.SERVER_PORT || 4000;

app.listen(PORT, () =>{
    console.log(`server is runing ${PORT}`.bgGreen.black);
});