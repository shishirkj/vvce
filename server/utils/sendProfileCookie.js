import jwt from "jsonwebtoken"


const sendProfileCookie = (profile,res,statusCode,msg)=>{


const profileData = jwt.sign({id:profile._id},process.env.JWT);


    res.status(statusCode).cookie("profileToken",profileData,{ 
        httpOnly:true,
        maxAge:7*60*1000*24,
        secure: true, // Set to true if using HTTPS
        sameSite: 'none',
    }).json({ 
        profile,
        succes:true,
        message:msg,
        profile

     })
}

export default sendProfileCookie