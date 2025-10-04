const bodyParser = require('body-parser');
const express = require ('express');

const app = express();

app.use((req, res, next)=>{
  console.log("First dummy middleware",req.url, req.method);
  next();

}) ;

app.use((req,res,next)=>{
  console.log("Second Dummy middleware",req.url, req.method);
  next();
});

/*app.use((req,res,next)=>{
  console.log("Third dummy middleware",req.url, req.method);
  res.send("<h1>Sending response in third middleware</h1>");
});*/

app.get("/",(req,res,next) => {
  console.log("Handling / for GET",req.url, req.method);
  res.send(`<h1>inside handling middleware</h1>`)
});

app.get("/contact-us",(req,res,next)=>{
  console.log(" handling /contact-us request");
  res.send(`<h1>please give your details here.</h1>
    <form action = "/contact-us" method = "POST">
    <input type="text" placeholder="Enter your name" name="name"/>
    <input type ="email" placeholder="Enter your email" name="email"/>
    <input type="Submit" Submit/>
    </form>
    `)
});

app.post("/contact-us",(req,res,next) => {
  console.log("First handling",req.url, req.method, req.body);
  next();
})

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
  console.log("Handling contact-us for POST",req.url, req.method);

  res.send(`<h1>We will contact you shortly</h1>`)
})

const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`Server running on address https://localhost:${PORT}`);
});