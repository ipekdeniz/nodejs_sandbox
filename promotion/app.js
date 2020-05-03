const express = require("express");
const bodyParser = require('body-parser');
const https = require('https');

var request = require('./request');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.post("/deneme", (req, res, next) => {
    request.get_promotion(req.body.message, req.body.username)
    .then(result => {
        res.json(result);
    }).catch(error => {
        res.json(error);
    })
});