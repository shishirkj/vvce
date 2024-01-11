import User from "../models/userModel.js";
import sendCookie from "../utils/sendCookie.js";
import ErrorHandler from "../middlewares/error.js";
import bcrypt from 'bcrypt'




//register user
export const registerUser = async ( req, res, next) => {
    try{
       console.log(req.body);
      const { name, email, password } = req.body;
      console.log("name",name,"email",email,"password",password)
      let user = await User.findOne({ email });
      if (user) return next(new ErrorHandler("User already exists", 400));
    const hashedPassword = await bcrypt.hash(password,10)
      user = await User.create({
        name,
        email,
        password:hashedPassword,  
      });
      sendCookie(user, res, 201, "user created successfully");
    }
    catch(error)
    { 
      next(error);
    }
   
  };
  

 