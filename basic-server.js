const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const router = require('./routes');

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));
app.post('/userSubmission', router.submitToCensus);

app.listen(3000);

console.log('listening on port 3000...');