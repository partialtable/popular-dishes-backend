// ver1
const { Client } = require('pg');
var connectionString = "postgres://jinyeongpark:@/dishes_service";
// var connectionString = "postgresql://172.17.0.2:5432/carousel";

const client = new Client({
    connectionString: connectionString
});

const db = client.connect()

client.connect((err) => {
  if (err) {
    console.log('error occured', err)
  } else {
    console.log('db connencted')
  }
});

// console.log('postgres db connected');


// // // ver2
// const pgp = require('pg-promise')(/* options*/);
// const dbConnection = pgp('postgres://jinyeongpark:@/dishes_service');
// // db.one('SELECT $1 AS value', 123)
// dbConnection.one('SELECT * FROM dishes WHERE dishes.dish_id=9000002;')
//   .then(function (data) {
//     console.log('postgres db is connected and getting the data')
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error)
//   })

// Database connection details;
// const cn = {
//   host: 'localhost', // 'localhost' is the default;
//   port: 5432, // 5432 is the default;
//   database: 'dishes_service',
//   user: 'jinyeongpark',
//   password: '1234'
// };


// const getAllDishes = (restrId, cb) => {
//   // console.log('DB getAllDishes restrId', restrId)
//   const q = `select * from dishes where restaurant_id = ${restrId};`;
//   dbConnection.query(q, (err, result) => {
//     if (err) {
//       cb(err);
//       return;
//     }
//     console.log('getAllDishes, result', result)
//     cb(null, result);
//   });
// };

// const getDishReviews = (dishIds, cb) => {
//   const q = `select * from reviews where dish_id in (${dishIds.join(',')});`;
//   dbConnection.query(q, (err, result) => {
//     if (err) {
//       cb(err);
//       return;
//     }
//     cb(null, result);
//   });
// };

// const getUsers = (usersIds, cb) => {
//   const q = `select * from users where user_id in (${usersIds.join(',')});`;
//   dbConnection.query(q, (err, result) => {
//     if (err) {
//       cb(err);
//       return;
//     }
//     cb(null, result);
//   });
// };

// module.exports = {
//   // db: db,
//   // dbConnection,
//   // getAllDishes,
//   // getDishReviews,
//   // getUsers,
// };

module.exports = db;
