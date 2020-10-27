const db = require('./index.js')


const getAllDishes = (restrId, callback) => {

  // console.log('DB getAllDishes restrId', restrId)
  const q = `
  SELECT restaurants.restaurant_name, dishes.dish_name, dishes.ingredients, dishes.picture_url
  FROM dishes
  LEFT JOIN restaurants
  ON dishes.restaurant_id=restaurants.restaurant_id
  WHERE dishes.restaurant_id=${restrId};`;

  // const q = `
  // SELECT restaurants.restaurant_name, dishes.dish_name, dishes.ingredients, dishes.picture_url
  // FROM dishes
  // INNER JOIN restaurants
  // ON dishes.restaurant_id=restaurants.restaurant_id
  // WHERE dishes.restaurant_id=${restrId};`;


  db.query(q, callback);
};


function createDish(dish_id, restaurant_id, dish_name, ingredients, picture_url, callback) {
  let q = 'INSERT INTO dishes (dish_id, restaurant_id, dish_name, ingredients, picture_url) VALUES (?, ?, ?, ?, ?)';
  let values = [dish_id, restaurant_id, dish_name, ingredients, picture_url];
  db.query(q, values, callback);
}

function updateDish(dish_name, dish_id, restaurant_id, callback) {
  db.query('UPDATE dishes SET dish_name = ? WHERE dish_id = ? AND restaurant_id = ?', [dish_name, dish_id, restaurant_id], callback);
}

function deleteDish(dish_id, callback) {
  db.query('DELETE FROM dishes WHERE dish_id = ?', [dish_id], callback);
}





module.exports = {
  getAllDishes,
  createDish,
  updateDish,
  deleteDish
};