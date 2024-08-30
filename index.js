// index.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('AWS Hello Lambda!');
});

app.get('/hello-One', (req, res) => {
  res.send('AWS Hello-One Lambda!');
});

app.get('/hello-Two', (req, res) => {
  res.send('AWS Hello-Two Lambda!');
});

module.exports.handler = serverless(app);