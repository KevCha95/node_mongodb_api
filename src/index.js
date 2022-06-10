require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routerStudent = require('../routes/students');

const port = process.env.PORT || 3000;


//Middleware
app.use(bodyParser.json());


//Routes
app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.use("/students",routerStudent);


//Server start
//Db Connection
try {
    mongoose.connect(process.env.MONGODB_URL)
    console.log("Connected to DataBase");
} catch (error) {
    console.error(error.message);
}


app.listen(port , ()=> {
    console.log(`Server is running on Http://localhost:${port}`)
})