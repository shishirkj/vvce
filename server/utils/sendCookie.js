import jwt from "jsonwebtoken"


const sendCookie = (user,res,statusCode,msg)=>{

console.log("secret key to mil raha hai na?",process.env.JWT)
const token = jwt.sign({id:user._id},process.env.JWT);
console.log("token",token)
    res.status(statusCode).cookie("token",token,{ 
        httpOnly:true,
        maxAge:7*60*1000*24,
        secure: true, // Set to true if using HTTPS
        sameSite: 'none',
    }).json({ 
        user,
        succes:true,
        message:msg,
        token

     })
}

export default sendCookie