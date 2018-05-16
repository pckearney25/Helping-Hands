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

  // app.get("/volunteer", function(request, response){
  //   response.sendFile(path.join(__dirname, "../public/html/volunteer.html"));
  //   console.log('inside get /volunteer');
  // });

// get all events associated witht he vol_id in the volunteer_events table
// to show the user
//

  app.get("/api/posts/", function(req, res) {
    // console.log("POST GET: ", res)
    db.Events.findAll({
     
    })
      .then(function(dbEvents) {
        res.json(dbEvents);
        // console.log("Got the data: ", dbEvents);
      });
  });
  //the where is hardcoded need to change that to be dynamic for the user that is currently loged in 
  app.get("/api/posts/:all", function(req, res) {
    // console.log("vol_events get: ", res);
    db.Volunteer_Events.findAll ({
      where: {
        vol_id: 1
      }
    }).then(function(dbVolunteer_Events){
      res.json(dbVolunteer_Events);
      // console.log("got the Volunteer_Events: ", dbVolunteer_Events);
    });
  });






};
