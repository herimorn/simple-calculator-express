const express=require("express");
const bodyParser=require("body-parser")
const app=express();
//getting the response to server
//initializing body paser to process the form
//using the body parser
app.use(bodyParser.urlencoded({extended:true}))
//passing of thr html
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html")

})
//accepting the post request from the client
app.post("/",function(req,res){
    
    var  num1=Number(req.body.num1);
    var  num2=Number(req.body.num2);
    var  result=num1+num2;
    res.send("the result is"+result);
    console.log(result)
    
})
app.listen("3000",()=>{
    console.log("we are listerning in the port 3000");
})
