import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import {Server} from 'socket.io'
import cors from 'cors'

dotenv.config();

const app = express();
const server = http.createServer(app);



//middleares

const io = new Server(server, { cors: { origin: "*", methods: ["GET", "POST"],} });

app.use(cors({
    origin: ["http://localhost:3001"],
  methods: ["GET", "POST","PUT","DELETE"],
    credentials: true,
}));




//socket.io
io.on('connection',(socket)=>{ 
    console.log("id",socket.id)
    socket.on('send-changes',(delta)=>{ 
      socket.broadcast.emit("receive-changes",delta)
    })
})

//express part
app.get('/', (req, res) => {
    res.end("hellodsdsd");
});

const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});