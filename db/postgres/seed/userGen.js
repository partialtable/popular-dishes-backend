const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
const dishes = require('./dishes.js');

var counter = 1;

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

const randromNumFor50 = Math.floor(Math.random() * 50);


const dataGen = () => {
  writer.pipe(fs.createWriteStream('./db/postgres/seed/data/users1.csv'));
  for (let i = counter; i < 3000001; i++) {
  // for (let i = 0; i < 10; i++) {
    writer.write({
      user_id: counter++,
      name: faker.internet.userName(),
      avatar_url:`https://avatarstkout.s3-us-west-1.amazonaws.com/${randromNumFor50}.jpg`,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email()
    })
    console.log(`Seeded ${i} records`);
  }

  writer.end();
  console.log('userTable.csv generation complete')
}

dataGen();