// Import required modules
const fs = require('fs')
const path = require('path')
const { Pool, Client} = require('pg')
const copyFrom = require('pg-copy-streams').from
const config = require('./data/config.json')

// inputfile & target table
// var copyPath = `COPY reviews(review_id, dish_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/reviews3.csv' DELIMITER ',' CSV HEADER;`
// var inputFile = path.join(__dirname, '/data/reviews3.csv');
var inputFile = path.join(__dirname, 'example.csv');
console.log('line 12')
//'/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/reviews3.csv'
var table = 'reviews'

// Getting connectin parameters from config.json
const host = config.host
const user = config.user
const pw = config.pw
const db = config.db
const port = config.port
const conString = `postgres://${user}:${pw}@${host}:${port}/${db}`


// Connecting to Database
const client = new Client({
  connectionString: conString,
})

client.connect()
console.log('line 31')

const executeQuery = (targetTable) => {
  const execute = (target, callback) => {
    console.log('line 35')
      client.query(`Truncate ${target}`, (err) => {
        console.log('line 36')
              if (err) {
              client.end()
              callback(err)
              return console.log(err.stack)
              } else {
              console.log(`Truncated ${target}`)
              callback(null, target)
              }
          })
  }
  execute(targetTable, (err) =>{
      if (err) return console.log(`Error in Truncate Table: ${err}`)
      // var stream = client.query(copyFrom(`COPY ${targetTable} FROM STDIN DELIMITER ',' CSV HEADER;`))
      console.log('line 49')
      var stream = client.query(copyFrom(`COPY ${targetTable} FROM CSV HEADER STDIN`))
      var fileStream = fs.createReadStream(inputFile)

      fileStream.on('error', (error) =>{
          console.log(`Error in creating read stream ${error}`)
      })
      stream.on('error', (error) => {
          console.log(`Error in creating stream ${error}`)
      })
      stream.on('end', () => {
          console.log(`Completed loading data into ${targetTable}`)
          client.end()
      })
      fileStream.pipe(stream);
  })
}
// Execute the function
executeQuery(table)
console.log('line 67')


//https://www.npmjs.com/package/pg-copy-streams
// var fs = require('fs')
// var { Pool } = require('pg')
// var copyFrom = require('pg-copy-streams').from

// var pool = new Pool()



// pool.connect(function (err, client, done) {
//   var stream = client.query(copyFrom('COPY my_table FROM STDIN'))
//   var fileStream = fs.createReadStream('./data/reviews3.csv')
//   fileStream.on('error', done)
//   stream.on('error', done)
//   stream.on('finish', done)
//   fileStream.pipe(stream)
// })