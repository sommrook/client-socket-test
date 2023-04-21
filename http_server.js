const express = require('express');
const app = express();
const port = 3000;

const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/client1', (req, res) => {
  res.sendFile(__dirname + '/annotator/client1.html');
});

app.get('/client2', (req, res) => {
  res.sendFile(__dirname + '/annotator/client2.html');
});

app.get('/client3', (req, res) => {
  res.sendFile(__dirname + '/annotator/client3.html');
});

app.get('/client4', (req, res) => {
  res.sendFile(__dirname + '/annotator/client4.html');
});

app.get('/nlp_status', (req, res) => {
  res.sendFile(__dirname + '/annotator/nlp_status.html');
});

app.get('/nlp_status', (req, res) => {
  res.sendFile(__dirname + '/annotator/nlp_status.html');
});

app.get('/meta', (req, res) => {
  res.sendFile(__dirname + '/admin/meta.html');
});

app.get('/doc1', (req, res) => {
  res.sendFile(__dirname + '/admin/doc1.html');
});

app.get('/doc2', (req, res) => {
  res.sendFile(__dirname + '/admin/doc2.html');
});

app.get('/doc1_task1', (req, res) => {
  res.sendFile(__dirname + '/admin/doc1_task1.html');
});

app.get('/doc1_task1', (req, res) => {
  res.sendFile(__dirname + '/admin/doc1_task2.html');
});


app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/study/login.html');
});

http.listen(port, ()=>{
  console.log("server 3000 start!");
})