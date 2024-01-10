import express from 'express';
import { config } from "dotenv";
import http from 'http';
import {Server} from 'socket.io'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoutes.js';
import connectDB from './data/database.js'; 

config({
  path: "C:/Users/reach/Desktop/check/server/data/secret/.env",
});


connectDB()

const app = express();
const server = http.createServer(app);




//middleares
app.use(cookieParser())
app.use(express.json())
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