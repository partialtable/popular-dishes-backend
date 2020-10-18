const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
const dishes = require('./dishes.js');

// var counter = 1;
// var counter = 2500001;
// var counter = 5000001;
var counter = 7500001;

const dataGen = () => {

  writer.pipe(fs.createWriteStream('./db/postgres/seed/data/dishes4.csv'));
  for (let i = counter; i < 10000001; i++) {
    let randromNumFor50Food = Math.floor(Math.random() * 50);
    writer.write({
      dish_id: counter++,
      restaurant_id: faker.random.number({ min: 1, max: 1499999 }),
      dish_name: dishes.dishNames[randromNumFor50Food],
      ingredients: dishes.dishIngr[randromNumFor50Food],
      picture_url: `https://dishestkout.s3-us-west-1.amazonaws.com/${randromNumFor50Food + 1}.jpeg`
    })
    console.log(`Seeded ${i} records`);
  }

  writer.end();
  console.log('popularDishTable.csv generation complete')
}

dataGen();
