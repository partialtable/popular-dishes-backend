const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
const dishes = require('./dishes.js');

// var counter = 1;
// var counter = 2500001;
// var counter = 5000001;
// var counter = 7500001;
// var counter = 10000001;
var counter = 12500001;
// var counter = 15000001;

const dataGen = () => {

  writer.pipe(fs.createWriteStream('./db/postgres/seed/data/dishes8.csv'));
  for (let i = counter; i < 15000001; i++) {
    // for (let i = counter; i < 10; i++) {
    let randromNumFor50 = Math.floor(Math.random() * 50);
    let randromNumForDish = Math.floor(Math.random() * 880);
    writer.write({
      dish_id: counter++,
      restaurant_id: faker.random.number({ min: 1, max: 10000000 }),
      dish_name: dishes.dishNames[randromNumForDish],
      ingredients: dishes.dishIngr[randromNumFor50],
      picture_url: `https://dishestkout.s3-us-west-1.amazonaws.com/${randromNumFor50 + 1}.jpeg`
    })
    console.log(`Seeded ${i} records`);
  }

  writer.end();
  console.log('popularDishTable.csv generation complete')
}
dataGen();