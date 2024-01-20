import express from "express";
import { registerUser,loginUser } from "../controllers/userController.js";


const userRoute = express.Router()


 userRoute
        .post('/signup',registerUser)
        .post('/login',loginUser)


 export default userRoute