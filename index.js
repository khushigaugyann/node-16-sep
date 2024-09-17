const express = require('express');
const connection = require('./connection');
const student = require('./routes/student');
const app = express();
connection();
app.use(express.json())
app.use(student)
app.listen(3000,(err)=>{
    if(err){
        console.log("error");
    }else{
        console.log("Server is running at 3000...")
    }
})

//http://localhost:3000/add/user\