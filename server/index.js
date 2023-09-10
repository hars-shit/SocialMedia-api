const express=require("express");
const mongoose=require("mongoose");
const router = require("./routes/user.routes");



const app=express();
app.use("/api/user",router)

mongoose.connect('mongodb://localhost:27017/socialMedia')
.then(()=> app.listen(3000))
    .then(()=>console.log("Server has connected")
    )
    .catch((err)=>console.log(err));

app.use("/api",(req,res,next)=>{
    res.send("Hello bro")
})

// app.listen(3000,()=>{
//     console.log("Server is Started")
// })