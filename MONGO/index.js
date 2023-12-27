const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const WebSocket = require('ws');
const app = express();

// WebSocket server setup
const wss = new WebSocket.Server({ noServer: true, path: '/ws' });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('Message received by server: ' + message); // Sending a response back to the client
  });

  ws.send('connected');
});

// Create HTTP server using Express app
const server = app.listen(4000, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log("Server Started Successfully.");
  }
});

// Upgrade HTTP server to handle WebSocket requests
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/datab", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());
app.use("/", authRoutes);