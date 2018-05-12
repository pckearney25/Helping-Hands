// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

app.get("/", function(request, response){
  response.sendFile(path.join(__dirname, "../public/welcome.html"));
});

app.get("/sign_in", function(request, response){
  response.sendFile(path.join(__dirname, "../public/signin.html"));
});

app.get("/sign_up", function(request, response){
  
})
app.get("/volunteer", function(request, response){
  response.sendFile(path.join(__dirname, "../public/volunteer.html"));
});

app.get("/organization", function(request, response){
  response.sendFile(path.join(__dirname, "../public/organizer.html"));
});





};
