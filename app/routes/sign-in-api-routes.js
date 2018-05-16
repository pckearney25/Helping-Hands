// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
var db = require("../models");

// Routes
module.exports = function (app) {
  
  
  
  
    app.post("/api/new", function(req, res) {
        console.log(req.body);      

        var newUser = {
            username: req.body.username,
            password: req.body.password
        }

        db.User.create(newUser).then(function(newUser) {
            console.log('newUser = ', newUser);
            res.send({redirect: "/login"});
        });

        

        // db.User.findOne({
        // where: {
        //     username: req.body.username
        // }
        // })
        // .then(function(dbUser) {
        //     res.json(dbUser);
        // });
    });

};