import ErrorHandler from "../middlewares/error.js";
import Profile from "../models/profileModel.js";
import cloudinary from 'cloudinary'
import dataUri from "../utils/dataUri.js";



//profile creation
export const updateProfile = async(req,res,next)=>{
    
  try {
      
    const file = req.files
  
    const fileUri =  dataUri(file)
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
      folder: "vvce",
      width: 150,
      crop: "scale",
    });
    
      const {bio,age,occupation,paperPublished,location,expertise,about,gamil,project,linkedin} = req.body;

      const profile = await Profile.create({ 
        bio,age,occupation,paperPublished,location,expertise,about,gamil,project,linkedin, image: {
          public_id: myCloud.public_id,
          url:myCloud.secure_url,
        },
      })
      if (!profile) {
        return next(new ErrorHandler("profile not created",500));
      }
      res.status(200).json({ 
        success:true,
        profile
    })
    } catch (error) {
        console.error("Error during user creation:", error);
      next(error)
    }

  }