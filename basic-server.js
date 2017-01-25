const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const router = require('./routes');
var morgan = require('morgan');

app.use(morgan('combined'));

var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));
app.post('/userSubmission', router.submitToCensus);

app.listen(PORT);

console.log('listening on port ' + PORT );