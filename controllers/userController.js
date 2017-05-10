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

  // I added these routes..
    app.get('/api/usergroup',function (req, res) {
        db.user.findAll({
            where: {
                groupName: req.body.groupName
            },
            include:[
                {
                    model:db.group,
                    include:[
                        {
                            model:db.spendings
                        }
                    ]
                }
            ]
        }).then(function (data) {
            res.json(data);
        })
    });

    app.get('/api/user/:id',function (req, res) {
        db.user.findAll({
            where: {
                id: req.params.id
            },
            include:[
                {
                    model:db.group,
                    include:[
                        {
                            model:db.spendings
                        }
                    ]
                }
            ]
        }).then(function (data) {
            res.json(data);
        })
    });

    app.get('/api/Allusers',function (req, res) {
        db.user.findAll({
            include:[
                {
                    model:db.group,
                    include:[
                        {
                            model:db.spendings
                        }
                    ]
                }
            ]
        }).then(function (data) {
            res.json(data);
        })
    });

    app.post('/api/adduser', function(req, res){
        const created_at = new Date();
        // var date =dateFormat(created_at, "dddd, mmmm dS, yyyy");

        const newUser = req.body.user;
        db.Users.create({
            name: "Hanifa",
            email:"youn@gmail.com",
            phoneNumber: 2442324,
            // createdAt: date,
            //updatedAt: date,

            // name: newUser.name,
            // email: newUser.email,
            // phoneNumber: newUser. phoneNumber,
        })
            .then(function(user) {
                res.json(user);
            });
    });

    app.post('/api/addgroup', function(req, res){
        //const created_at = new Date();
        // const newGroup = req.body.post;
        db.Groups.create({
            UserId: '1',
            groupName: "gooing HOme",
            groupImage:"com",
            groupTheme:"Work Harder",
            // UserId: newGroup.UserId,
            // groupName: newGroup.groupman,
            // groupImage: newGroup.groupImage,
            // groupTheme: newGroup.groupTheme,
        })
            .then(function(groupData) {
                res.json(groupData);
            });
    });

    app.post('/api/addspending', function(req, res){
        const created_at = new Date();
        var total;
        const newSpending = req.body.comment;
        db.Spendings.create({
            GroupId:1,
            groceries: 980,
            gas:5,
            leisure: 4,
            totalSpendings : 989

            // GroupId: newSpending.GroupId,
            // groceries: newSpending.groceries,
            // gas: newSpending.gas,
            // leisure: newSpending.leisure,
            //   total: parseFloat(newSpending.groceries.trim())
            // + parseFloat(newSpending.gas.trim())
            //  +parseFloat(newSpending.leisure.time());
            //  totalSpendings : total
        }).then(function(spending){
            res.json(spending);
        });
    });

};

