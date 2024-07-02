const {chatModel} = require('./models/UsersChatModel');
const express = require("express");
const cors = require("cors");
const http = require("node:http");
require('./DBConnection');
const socketIo = require("socket.io");

const app = express();
app.use(cors({ origin: "*" }));
const server = http.createServer(app)
const io = socketIo(server, { cors: { origin: "*" } })
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on('connection', (socket) => {
    // Handle incoming messages
    socket.on('setchat message', async (msg, user) => {
        // Broadcast the message to all connected clients
        io.emit('getchat message', msg, user);
        const createChat = await chatModel.create({user: user.email, chat: msg})
        createChat.save()
        console.log('message: ', msg, user);
    });
    socket.on('disconect', () => {
        console.log('client disconnected ');
    })
})

const authRoutes = require('./routes/AuthRoutes');
const usersRoutes = require('./routes/UsersChatRoutes');
app.use('/auth', authRoutes)
app.use('/users/', usersRoutes)
server.listen(8000, () => {
    console.log("29== Server is running on port 8000");
});
