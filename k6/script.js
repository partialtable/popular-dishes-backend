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
    { duration: '30s', target: 50 },
    { duration: '1m', target: 100 },
    { duration: '30s', target: 150 },
    { duration: '1m', target: 200 },
    { duration: '30s', target: 0 },
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

  let res = http.get(`http://localhost:3003/api/restaurants/${restaurantId}/dishes`);
  // Automatically added sleep

  errorRate.add(res.status >= 400)
  sleep(1);
}





// import http from 'k6/http';
// import { sleep } from 'k6';

// export let options = {
//   stages: [
//     { duration: '30s', target: 50 },
//     { duration: '1m', target: 10 },
//     { duration: '30s', target: 50 },
//     { duration: '1m', target: 20 },
//     { duration: '30s', target: 5 },
//     // { duration: '1s', target: 50 },
//     // { duration: '30s', target: 1000 },
//     // { duration: '60s', target: 1750 },
//   ],
// };

// export default function () {
//   let restaurantId = Math.floor(Math.random() * (10000000)) + 1;
//   http.get(`http://localhost:3003/api/restaurants/${restaurantId}/dishes`);
//   sleep(1);
// }

// k6 run script.js