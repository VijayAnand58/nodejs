const express=require('express')
const category=require('./routes')
const app= express()
const mongoose=require('mongoose')
app.use(express.json())
app.use(category)



const port= process.env.PORT || 3000
app.listen(port,()=>{console.log(`port number is ${port}`)})