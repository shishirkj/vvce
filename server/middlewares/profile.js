import  jwt from "jsonwebtoken";
import Profile from "../models/profileModel.js";

export const isProfilePresent = async (req, res, next) => {
    const { profileData } = req.cookies;
    console.log("profileCookie",req.cookies)
  console.log("profileData",profileData)
  
    if (!profileData) return next(new ErrorHandler("No Profile Data", 404));
  
    const decoded = jwt.verify(profileData, process.env.JWT);
  
    req.profile = await Profile.findById(decoded.id);
  
    next();
  };
  