import express from "express";
import { updateProfile } from "../controllers/profileController.js";


const profileRoute = express.Router()


 profileRoute
            .post('/profile',updateProfile)
            



 export default profileRoute