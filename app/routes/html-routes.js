// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  console.log("html-routes listening");
  // Each of the below routes just handles the HTML page that the user gets sent to.

  //index route loads welcome.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/welcome.html"));
  });

  // login route loads the login.html page, where users can login.
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

  // signup route loads the signup.html page, where users can signup as volunteers or organizations.
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/signup.html"));
  });

  // short route loads the short.html page, where short books in the db are displayed
  //app.get("/short", function(req, res) {
  //res.sendFile(path.join(__dirname, "../public/short.html"));
  //});

  // long route loads the long.html page, where long books in the db are displayed
  //app.get("/long", function(req, res) {
  //res.sendFile(path.join(__dirname, "../public/long.html"));
  //});
};
