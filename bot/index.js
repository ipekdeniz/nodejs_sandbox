var request = require('request');

var jsonDataObj = {'message': 'hey dude', 'username': 'ipek'};

request.post({
  headers: {'content-type' : 'application/json'},
  url:     'http://localhost:3000/deneme',
  body:    jsonDataObj,
  json:    true
}, function(error, response, body){
  console.log(body);
});