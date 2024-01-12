import express from 'express';
import { config } from "dotenv";
import http from 'http';
import {Server} from 'socket.io'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoutes.js';
import profileRoute from './routes/profileRoutes.js';
import connectDB from './data/database.js'; 
import cloudinary from 'cloudinary';
import fileUpload from 'express-fileupload';
import ErrorHandler from './middlewares/error.js';

config({
  path:"C:/Users/reach/Desktop/check/server/data/secret/.env" ,
});





connectDB()

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});


const app = express();
const server = http.createServer(app);




//middleares
app.use(cookieParser())
app.use(express.json())
app.use(fileUpload());
//socket cors
const io = new Server(server, { cors: { origin: "*", methods: ["GET", "POST"],} });

//express cors
app.use(cors({
    origin: ["http://localhost:3000"],
  methods: ["GET", "POST","PUT","DELETE"],
    credentials: true,
}));





//socket.io
io.on('connection',(socket)=>{ 
 
    socket.on('send-changes',(delta)=>{ 
      socket.broadcast.emit("receive-changes",delta)
    })
})

app.use('/api/v1',userRoute);
app.use('/api/v1',profileRoute);


//error handler
app.use(ErrorHandler)

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});


const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});