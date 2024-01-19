import express from "express";
import { updateProfile } from "../controllers/profileController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const profileRoute = express.Router()


 profileRoute
            .post('/profile',isAuthenticated,updateProfile)
            



 export default profileRoute