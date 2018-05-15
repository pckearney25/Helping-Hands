// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Event = require("../models/event.js");
// var Organizer = require("../models/organization.js");
// var Volunteer = require("../models/volunteer.js");
// var VolunteerEvents = require("../models/vol_evnt.js");
var db = require("../models");
var path = require("path");
var sequelize = db.helping_handsdb;

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/volunteer", function(request, response){
    response.sendFile(path.join(__dirname, "../public/html/volunteer.html"));
    console.log('inside get /volunteer');
  });

  // app.get("/api/volunteer", function(request, response){
  //   console.log('inside get /api/volunteer');
  //   db.events.findAll({
  //     // include: [db.events]
      
  //   }).then(function(dbVolunteer){
  //     response.json(dbVolunteer);
  //   });
  // });

  app.get("/api/volunteer", function(request, response) {
    sequelize.sync().then(function (){
      db.Events.findAll({
        include: [db.Volunteer_Events],
        include: [db.Volunteer]
    }).then(function(dbEvents_Volunteers) {
      res.json(dbEvents_Volunteers);
      console.log("events-Volunteers #####################: ", dbEvents_Volunteers);
    });
  });

  });

  app.get("/api/volunteers", function(request, response) {
    sequelize.sync().then(function(db_Events_Volunteers) {
      db.Events.findAll({
        where: {
          // length of the events array
        }
      });
    });
  });
};
