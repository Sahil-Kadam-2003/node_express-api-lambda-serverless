// index.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send({"message":"AWS Hello Lambda!","status code":"200"});
});

app.get('/hello-One', (req, res) => {
  res.send({"Message":"AWS Hello-One Lambda!","status code":"200"});
});

app.get('/hello-Two', (req, res) => {
  res.send({"message":"AWS Hello-Two Lambda!","status code":"200"});
});

module.exports.handler = serverless(app);