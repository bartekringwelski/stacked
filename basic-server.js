var express = require('express');
var app = express();
var axios = require('axios');
var path = require('path');




app.use('/static', express.static(path.join(__dirname, 'public')));



app.listen(3000);


console.log('listening on port 3000...');