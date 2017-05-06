/**
 * Created by hanifa on 5/1/17.
 */

var express = require("express");
var path = require('path');
var bodyparser = require('body-parser');
var db = require("./models");
var sequelize = require('sequelize');
const  PORT = process.env.PORT|| 3000;
var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(bodyparser.text());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.get('/', function (req, res) {
    db.Users.findAll({
        include:[db.Spendings]
    }).then(function(data){
        res.status(200).json(data);
    })
})

app.post('/post', function (req, res) {

    db.Users.create({
    name: "Jhone",
    email:"john@gmail.com",
    phoneNumber: 1234567
    }).then(function (data) {
        res.status(200).json(data);
    });

})

app.post('/spend', function (req, res) {
    db.Spendings.create({
        UserId:1,
        groceries: 980,
        gas:5,
        leisure: 4
    }).then(function (data) {
       res.status(200).json(data);
    });

})

db.sequelize.sync().then(function () {
    // if(err) return console.log("db connection failed: "+ err);
    app.listen(PORT, function (err) {
        if(err) return console.log("web server failed to start");
        console.log("server started successfully");
    });

})