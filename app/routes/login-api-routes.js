// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  console.log("api-routes listening");

  app.post("/api/login", function(req, res) {
    console.log(req.body);
    db.User.findAll({
      where: req.body
    }).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });

  
  app.get("/login/volunteer", function(req, res) {
    console.log(req);
    User.findOne({
      where: {
        username: req.body.username
      }
    });
  });
};
