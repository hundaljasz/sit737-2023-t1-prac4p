var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const microserviceRoutes = require('./CalMicroService');
const res = require("express/lib/response");

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', microserviceRoutes)

app.post('/getResult',(req,res) => {
    let operation = req.query.op;
    res.send(operation);
});

var server = app.listen(3000,() => {
    console.log('server is listening on port', server.address().port);
});