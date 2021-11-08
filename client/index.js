const axios = require('axios').default;

const MAX_REQUEST_NUMBER = 20000;

const serverUrlExpress = 'http://localhost:3000';
const serverUrlFastify = 'http://localhost:3001';

let counter = 0; 
// Express: 7478, 8706, 8331, 7890, 8144, 8569
// Fastify: 12405, 11331, 13073, 9926, 10598, 9361
let requests = 0;
let startTime = new Date().getTime();

const serverUrl = serverUrlExpress;

while (requests < MAX_REQUEST_NUMBER) {
    requests++;
    ((requests) => {
        let currentTime = new Date().getTime();
        axios.get(serverUrl).then(res => {
            if (res && res.status === 200 && currentTime < startTime + 1000) {
                counter++
                console.log('@== counterDone->requests', counter, ' ', requests, ' ', currentTime - startTime);
            }
        }).catch(err => {});
    })(requests);
    
}
