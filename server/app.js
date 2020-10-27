/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const newRelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const db = require('../db/postgres/index.js');
const db = require('../db/postgres/apiQueries.js');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

// app.get('/:id', (req, res) => {
//   res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
// });
// single api call to get all the data about dishes reviews and users of a particular restaurant
// app.get('/api/dishes/restaurant/:id', (req, res) => {
app.get('/api/restaurants/:restaurantId/dishes/', (req, res) => {


  // const finalResponse = {};
  db.getAllDishes(req.params.restaurantId, (err, data) => {
    // console.log('req.params.restaurantId', req.params.restaurantId)
    if (err) {
      console.log(err.sqlMessage);
      res.end('Error quering the database');
    } else {
      // if (!data.length) {
      //   console.log('SERVER APP GET')
      //   res.status(422).send('invalid restaurand id');
      //   return;
      // }
      // console.log('SERVER App getAllDishes getting data', data.rows)


      res.status(200).send(data.rows);
    }
  });
});

app.post('/api/restaurants/:restaurantId/dishes/', (req, res) => {

  // const finalResponse = {};
  db.createDish(req.params.restaurantId, (err, data) => {
    console.log('req.params.restaurantId', req.params.restaurantId)
    if (err) {
      console.log(err.sqlMessage);
      res.end('Error quering the database');
    } else {

      console.log('SERVER App getAllDishes getting data')
      res.status(200).send('post success');
    }
  });
});


module.exports = app;
