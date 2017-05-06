var db = require("../models");
var path = require("path");

//console.log("currently in the burger-api-routes file");
module.exports = function(app) {
  
  app.get("/", function(req, res) {
    // Finding all-added burgers in the db
      res.render("user");
  });

  app.get("/users/register", function(req, res) {
      res.render("register");
  });

  app.get("/users/login", function(req, res) {
      res.render("login");
  });

  app.get("/users/logout", function(req, res) {
      res.render("logout");
  });

  app.get("/users/ranking", function(req, res) {
      db.Users.findAll({}).then(function(results) {
      res.render("ranking", {users: results});
      //res.json(usersInDb);
    });
  });


  //Hanifa backend tables routes
  // app.post('/postgroup', function (req, res) {
  //   db.Groups.create({
  //       groupman: "Jhone",
  //       groupImage:"john@gmail.com",
  //       groupTheme:"Work Harder",
  //   }).then(function (data) {
  //       res.status(200).json(data);
  //   });
  // });

  app.post('/api/post', function (req, res) {
      db.Users.create({
      //GroupId:1,
      name: "Jhone",
      email:"john@gmail.com",
      phoneNumber: 1234567
      }).then(function (data) {
          res.status(200).json(data);
      });

  });

  app.post('/api/spend', function (req, res) {
      db.Spendings.create({
          UserId:1,
          groceries: 980,
          gas:5,
          leisure: 4
      }).then(function (data) {
        res.status(200).json(data);
      });

  });
};

