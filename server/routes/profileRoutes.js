import express from "express";
import { updateProfile } from "../controllers/profileController.js";
import { isProfilePresent } from "../middlewares/profile.js";

const profileRoute = express.Router()


 profileRoute
            .post('/profile',updateProfile)
            .get('/getProfile',isProfilePresent,)



 export default profileRoute