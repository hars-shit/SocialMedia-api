const User =require('./models/User.js');


 exports.getAllUser=async(req,res,next)=>{
    let users;
    try{
        users=await User.find();
    }catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(404).json({message:"No user Found"})
    }
    return res.status(200).json({users})
}


