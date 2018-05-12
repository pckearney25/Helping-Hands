// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Event = require("../models/event.js");
// var Organizer = require("../models/organizer.js");
// var Volunteer = require("../models/volunteer.js");
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {


  app.get("/api/volunteer", function(request, response){
    db.Volunteer.findAll({
      include: [db.events]
    }).then(function(dbVolunteer){
      response.json(dbVolunteer);
    });
  });



};
