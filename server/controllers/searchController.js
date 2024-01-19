import {  getJson } from "serpapi";
import ErrorHandler from "../middlewares/error.js";

export const googleSearch = async(req,res,next)=>{ 

    const query = req.query.q
try {
    
    const apiKey = process.env.GOOGLE_API_KEY;

const params = {
  engine: "google_scholar",
  q: query,
  api_key: apiKey,
};

// Show result as JSON (async/await)
const response1 = await getJson(params);


if(!response1)
{
    return next(new ErrorHandler("Data not found", 404));
} 

res.status(200).json({ 
    data:response1
})
} catch (error) {
      next(error);
}
}



