// ver1 - pool -- improve query speed?
const { Pool } = require('pg')

var connectionString = "postgres://jinyeongpark:@/dishes_service2";

const pool = new Pool({
  connectionString: connectionString
})
// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})
// callback - checkout a client
pool.connect((err) => {
      if (err) {
        console.log('error occured', err)
      } else {
        console.log('db connencted')
      }
})

module.exports= pool;

// ver2 - client
// const { Client } = require('pg');

// // const cn = {
// //   host: 'localhost', // 'localhost' is the default;
// //   port: 5432, // 5432 is the default;
// //   database: 'dishes_service2',
// //   user: 'jinyeongpark',
// //   password: '1234'
// // };

// // const client = new Client(cn);


// // another way to setup
// var connectionString = "postgres://jinyeongpark:@/dishes_service2";

// const client = new Client({
//   connectionString: connectionString
// });

// client.connect((err) => {
//     if (err) {
//       console.log('error occured', err)
//     } else {
//       console.log('db connencted')
//     }
// })

// // const db = client.connect()

// module.exports= client;
