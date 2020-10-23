const pgp = require('pg-promise')(/* options*/);
const db = pgp('postgres://jinyeongpark:@/dishes_service');
// db.one('SELECT $1 AS value', 123)
db.one('SELECT * FROM dishes WHERE dishes.dish_id=9000002;')
  .then(function (data) {
    console.log('DATA:', data)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })

// Database connection details;
// const cn = {
//   host: 'localhost', // 'localhost' is the default;
//   port: 5432, // 5432 is the default;
//   database: 'dishes_service',
//   user: 'jinyeongpark',
//   password: '1234'
// };


const getAllDishes = (restrId, cb) => {
  const sql = `select * from dishes where restaurant_id = ${restrId};`;
  db.query(sql, (err, result) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, result);
  });
};

const getDishReviews = (dishIds, cb) => {
  const sql = `select * from reviews where dish_id in (${dishIds.join(',')});`;
  db.query(sql, (err, result) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, result);
  });
};

const getUsers = (usersIds, cb) => {
  const sql = `select * from users where user_id in (${usersIds.join(',')});`;
  db.query(sql, (err, result) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, result);
  });
};

module.exports = {
  db: db,
  getAllDishes,
  getDishReviews,
  getUsers,
};

