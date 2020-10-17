const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
const dishes = require('./dishes.js');

var counter = 1;

const dataGen = () => {

  writer.pipe(fs.createWriteStream('./db/postgres/seed/data/restaurants.csv'));
    for (let i = 0; i < 10000000; i++) {
    // for (let i = 0; i < 10; i++) {
    const randromNumFor50Food = Math.floor(Math.random() * 50);
    writer.write({
      restaurant_id: counter++,
      restaurant_name: faker.company.companyName(),
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