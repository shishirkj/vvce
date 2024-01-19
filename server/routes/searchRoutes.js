import express from "express";
import { googleSearch } from "../controllers/searchController.js";
import { isAuthenticated } from "../middlewares/auth.js";


const searchRoute = express.Router()


 searchRoute
            .get('/search',isAuthenticated,googleSearch)
            



 export default searchRoute