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

  writer.pipe(fs.createWriteStream('./db/postgres/seed/data/restaurants4.csv'));
  for (let i = counter; i < 10000001; i++) {
  // for (let i = counter; i < 10; i++) {
    const randromNum = Math.floor(Math.random() * 1000);
    writer.write({
      restaurant_id: counter++,
      restaurant_name: dishes.restaurantName[randromNum],
      city: faker.address.city(),
      state: faker.address.state(),
      zip_code: faker.address.zipCode(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email()
    })
    console.log(`Seeded ${i} records`);
  }

  writer.end();
  console.log('restaurantTable.csv generation complete')
}

dataGen();