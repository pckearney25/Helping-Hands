// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Event = require("../models/event.js");
var Organizer = require("../models/organizer.js");
var Volunteer = require("../models/volunteer.js");

// Routes
// =============================================================
module.exports = function(app) {

//THESE WILL HAVE TO BE WRITTEN FOR THE FUNCTIONS REQUIRED OF YOUR SPECIFIC PAGES. 
//NOTE: SOME OF THESE WILL HAVE TO BE CALLED AS SOON AS YOUR PAGE LOADS. 
//As such, you might want to bracket your page.js files in a document ready function.

  // Get all books
  //app.get("/api/all", function(req, res) {
    //Book.findAll({}).then(function(results) {
      //res.json(results);
    //});
  //});


  // Add a book
  //app.post("/api/new", function(req, res) {
    //console.log("Book Data:");
    //console.log(req.body);
    //Book.create({
      //title: req.body.title,
      //author: req.body.author,
      //genre: req.body.genre,
      //pages: req.body.pages
    //});
  //});

  // Delete a book
  //app.post("/api/delete", function(req, res) {
    //console.log("Book Data:");
    //console.log(req.body);
    //Book.destroy({
      //where: {
        //id: req.body.id
      //}
    //});
  //});
};
