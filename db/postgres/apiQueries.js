const client = require('./index.js')



const getAllDishes = (restrId, callback) => {
  // console.log('DB getAllDishes restrId', restrId)
  const q = `
  SELECT restaurants.*, dishes.*, reviews.*
  FROM restaurants
  INNER JOIN dishes
  ON restaurants.restaurant_id = dishes.restaurant_id
  INNER JOIN reviews
  ON dishes.dish_id = reviews.dish_id
  INNER JOIN users
  ON reviews.user_id  = reviews.user_id
  WHERE restaurants.restaurant_id= ?;
  `;
  client.query(q, [restrId], callback);
};

  // SELECT restaurants.restaurant_name, restaurants.restaurant_id, dish_name, ingredients, picture_url
  // FROM dishes
  // INNER JOIN restaurants
  // ON dishes.restaurant_id=restaurants.restaurant_id
  // WHERE dishes.restaurant_id=?;

  // SELECT restaurants.*, dishes.*, reviews.*
  // FROM restaurants
  // INNER JOIN dishes
  // ON restaurants.restaurant_id = dishes.restaurant_id
  // INNER JOIN reviews
  // ON dishes.dish_id = reviews.dish_id
  // INNER JOIN users
  // ON reviews.user_id  = reviews.user_id
  // WHERE restaurants.restaurant_id= ?;

function createDish(dish_id, restaurant_id, dish_name, ingredients, picture_url, callback) {
  let q = 'INSERT INTO dishes (dish_id, restaurant_id, dish_name, ingredients, picture_url) VALUES (?, ?, ?, ?, ?)';
  let values = [dish_id, restaurant_id, dish_name, ingredients, picture_url];
  client.query(q, values, callback);
}

function updateDish(dish_name, dish_id, restaurant_id, callback) {
  client.query('UPDATE dishes SET dish_name = ? WHERE dish_id = ? AND restaurant_id = ?', [dish_name, dish_id, restaurant_id], callback);
}

function deleteDish(dish_id, callback) {
  client.query('DELETE FROM dishes WHERE dish_id = ?', [dish_id], callback);
}





module.exports = {
  getAllDishes,
  createDish,
  updateDish,
  deleteDish
};