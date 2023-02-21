const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require("dotenv").config();
const url ='mongodb://localhost/users'
// const connectDb = require("./config/dbConnection.js");


// connectDb();
const app = express();
mongoose.connect(url,{useNewUrlParser:true});
const con =mongoose.connection

con.on('open',()=>{
    console.log('connected')
})

const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/users", require("./routes/userRoutes.js"));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});