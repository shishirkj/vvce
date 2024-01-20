import express from "express";
import { googleSearch } from "../controllers/searchController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { versionControl } from "../controllers/searchController.js";

const searchRoute = express.Router()


 searchRoute
            .get('/search',isAuthenticated,googleSearch)
            .get('/logbook/:documentId',versionControl)
            



 export default searchRoute