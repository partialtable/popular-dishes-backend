// EC2 ver2
const { Pool } = require('pg')

const pool = new Pool({
  // sever: '',
  user: 'postgres',
  host: '13.52.57.138', // 'localhost' is the default;
  port: 5432, // 5432 is the default;
  database: 'dishes_service2',
  password: '1234'
});



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


// ver1 - pool -- improve query speed
// Local
// const { Pool } = require('pg')

// var connectionString = "postgres://jinyeongpark:@/dishes_service2";

/*
// const pool = new Pool({
//   user: 'jinyeongpark',
//   host: 'localhost', // 'localhost' is the default;
//   port: 5432, // 5432 is the default;
//   database: 'dishes_service2',
//   password: '1234'
// });
*/

// const pool = new Pool({
//   connectionString: connectionString
// })
// // the pool will emit an error on behalf of any idle clients
// // it contains if a backend error or network partition happens
// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })
// // callback - checkout a client
// pool.connect((err) => {
//       if (err) {
//         console.log('error occured', err)
//       } else {
//         console.log('db connencted')
//       }
// })

// module.exports= pool;
