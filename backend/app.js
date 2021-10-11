const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.end ('sedef');
});

const votes = {
  java: 0,
  javascript:0,
  python:0,
  c:0
}

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('new-vote' , votes)

  socket.on('new-vote', (vote) => {
    console.log('New-vote -> ' , vote );

    votes[vote] += 1;
    io.emit('new-vote' , votes)
    console.log(votes);
  });

  socket.on('disconnect', () => console.log('a user disconnected'));
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});