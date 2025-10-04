const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home",(req,res,next)=>{
  console.log(req.url, req.method);
  res.send(
    `<h1>Find your favourit stay here:</h1>
    <form action="/host/add-home" method="POST" >
    <input type ="text" name="houseName" placeholder ="Enter the name of your house">
    <input type="Submit"/>
    </form>`
  )
})

hostRouter.post("/add-home",(req,res,next)=>{
  console.log(req.body);
  //console.log(req.url, req.method);
  res.send(
    `<h1>Home registered succesfully</h1>
    <a href = "/">Go to Home</a>`

  )
})

module.exports = hostRouter; 