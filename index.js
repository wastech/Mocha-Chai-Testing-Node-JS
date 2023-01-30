const express = require('express');
const app = express();
require("dotenv").config();
const portnum = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const cors = require('cors');

require("./model/db");


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//route

app.use("/api",require("./router/user"));



app.listen(portnum, (req,res)=>{
    console.log(`Server connected on port: ${portnum}`);
})