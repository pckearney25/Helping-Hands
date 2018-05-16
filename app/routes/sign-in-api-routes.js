// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
var db = require("../models");

// Routes
module.exports = function (app) {
  
  //app.get("/api/all", function(req, res) {
  //Book.findAll({}).then(function(results) {
  //res.json(results);
  //});
  //});
  
  
    app.post("/api/new", function(req, res) {
        console.log(req.body);      

        var newUser = {
            username: req.body.username,
            password: req.body.password
        }

        db.User.create(newUser).then(function(newUser) {
            console.log('newUser = ', newUser);
        });

        res.status(201).send();

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