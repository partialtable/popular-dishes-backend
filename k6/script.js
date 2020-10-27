import http from 'k6/http';
import { Rate } from 'k6/metrics'
import { sleep } from 'k6';

// let's collect all errors in one metric
let errorRate = new Rate('error_rate')

export const options = {
  thresholds: {
    error_rate: ['rate < 0.1'],
  },
  stages: [
    { duration: "10s", target: 500 },
    { duration: "10s", target: 500 },
    { duration: "5s", target: 2000 },
    { duration: "30s", target: 2000 }

    // { duration: "10s", target: 600 },
    // { duration: "10s", target: 600 },
    // { duration: "5s", target: 1000 },
    // { duration: "15s", target: 1000 }

    // { duration: "1m", target: 200 },
    // { duration: "2m", target: 500 },
    // { duration: "3m", target: 1000 },
    // { duration: "1m", target: 200 },
    // { duration: "30s", target: 50 },
  ],

  ext: {
    loadimpact: {
      distribution: {
        Dublin: { loadZone: 'amazon:ie:dublin', percent: 100 },
      },
    },
  },
};
export default function main() {
  let restaurantId = Math.floor(Math.random() * (10000000)) + 1;

  // GET
  let res = http.get(`http://localhost:3003/api/restaurants/${restaurantId}/dishes`);

  // Automatically added sleep
  errorRate.add(res.status >= 400)
  sleep(.1);
}





// ver2
// import http from 'k6/http';
// import { check, sleep } from 'k6';
// import { Rate, Trend } from 'k6/metrics';

// export let restaurantTrend = new Trend('GET /api/restaurants Response Time (ms)');
// export let restaurantErrorRate = new Rate('GET /api/restaurants Error Rate');

// // ramp up/down the number of users
// const stages1k = [
//   { duration: "30s", target: 200 },
//   { duration: "1m", target: 500 },
//   { duration: "2m", target: 1000 },
//   { duration: "1m", target: 500 },
//   { duration: "30s", target: 200 },
// ];

// const stages100 = [
//   { duration: "30s", target: 20 },
//   { duration: "1m", target: 50 },
//   { duration: "2m", target: 100 },
//   { duration: "1m", target: 50 },
//   { duration: "30s", target: 20 },
// ];

// const stages10 = [
//   { duration: "30s", target: 2 },
//   { duration: "1m", target: 5 },
//   { duration: "2m", target: 10 },
//   { duration: "1m", target: 5 },
//   { duration: "30s", target: 2 },
// ];

// const stages1 = [
//   { duration: "30s", target: 1 },
// ];

// export const options = {
//   stages: stages1k,
// }

// export default function() {
//   // GET a random restaurant from the server
//   const restaurantId = Math.floor(Math.random() * (10000000)) + 1;;
//   const urlRestaurants = `http://localhost:3003/api/restaurants/${restaurantId}/dishes`;

//   const restaurantResp = http.get(urlRestaurants);

//   check(restaurantResp, {
//     'status is 200': r => r.status === 200
//   }) || restaurantErrorRate.add(1);

//   restaurantTrend.add(restaurantResp.timings.duration);

//   sleep(1);
// }
