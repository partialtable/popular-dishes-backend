const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
const dishes = require('./dishes.js');

// var counter = 1;
var counter = 2500001;


function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

const randomBoolean = () => {
  const num = Math.floor(Math.random() * 10);
  return num % 2 === 0 ? true : false;
}

const dataGen = () => {
  writer.pipe(fs.createWriteStream('./db/cassandra/seed/data/reviews2.csv'));

  for (let i = counter; i < 5000001; i++) {
    const fakeDate = randomDate(new Date(1970, 0, 1), new Date(2020, 0, 1))

    writer.write({
      dish_id: faker.random.number({ min: 1, max: 250000 }),
      review_id: counter++,
      user_id: faker.random.number({ min: 1, max: 250000}),
      review: faker.lorem.paragraph(),
      dined_on: fakeDate,
      stars: (Math.random() * 5).toFixed(1),
      user_status: randomBoolean()
    })
    console.log(`Seeded ${i} records`);
  }

  writer.end();
  console.log('dishReviewTable.csv generation complete')
}

dataGen();