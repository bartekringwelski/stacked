var express = require('express');
var app = express();
var axios = require('axios');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/test', function(){
  console.log("server got something")
})


app.listen(3000);


console.log('listening on port 3000...');