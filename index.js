const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url ='mongodb://localhost/data'
const app =express()
const userRouter = require('./routers/users')

mongoose.connect(url,{useNewUrlParser:true});
const con =mongoose.connection

con.on('open',()=>{
    console.log('connected')
})

app.use(express.json());
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(userRouter)


app.listen(9000,()=>{
    console.log('server started')
})