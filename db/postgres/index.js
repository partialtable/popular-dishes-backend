const { Client } = require('pg')

const client = new Client({
  user: 'jinyeongpark',
  host: 'localhost',
  database: 'dishes_service',
  password: '1234',

})

client.connect()
console.log('db connected');
// var connectionString = "postgres://postgres:postgres@localhost:5432/database";

// const client = new Client({
//   connectionString: connectionString
// });


// query example1
// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message) // Hello World!
//   client.end()
// })

// // // query example2 - dishes_service
// client.query('CREATE DATABASE dishes_service;', (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Created sample dishes_service DB');
//     console.log(res);
//   }
// });

module.export = client;