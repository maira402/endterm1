const express=require("express");
const path=require("path")
const app = express();
  


app.get("/about",(req,res)=>{
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname,"about.html"))
})

app.set("port", process.env.PORT ||3000)