import User from "../models/userModel.js";
import sendCookie from "../utils/sendCookie.js";
import ErrorHandler from "../middlewares/error.js";



//register user
export const registerUser = async ( req, res, next) => {

    try{
       console.log(req.body);
      const { name, email, password } = req.body;
      console.log("name",name,"email",email,"password",password)
      let user = await User.findOne({ email });
      if (user) return next(new ErrorHandler("User already exists", 400));
    
      user = await User.create({
        name,
        email,
        password,  
      });
      sendCookie(user, res, 201, "user created successfully");
    }
    catch(error)
    { 
      next(error);
    }
   
  };
  