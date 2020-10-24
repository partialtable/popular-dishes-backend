const newRelic = require('newrelic');
const path = require('path');
const express = require('express');
const db = require('../db/postgres/index.js');

const app = express();
const port = 3002;

// const router = express.Router();

// serve static
app.use(express.static(path.join(__dirname, '/../client/dist')));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

// router
app.get('/api/restaurants/:restaurantId/dishes', (req, res) => {
  console.log('SERVER GET')
  if (err) {
    res.status(200).send
  }
  res.status(200).send('Getting all popular dishes');
});

app.post('/api/restaurants/:restaurantId/dishes', (req, res) => {
  console.log('SERVER POST')
  res.status(201).send('Adding a popular dish');
});

app.patch('/api/restaurants/:restaurantId/dishes/:dishId', (req, res) => {
  console.log('SERVER PATCH')
  res.status(204).end();
});

app.delete('/api/restaurants/:restaurantId/dishes/:dishId', (req, res) => {
  console.log('SERVER DELETE')
  res.status(204).end();
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
