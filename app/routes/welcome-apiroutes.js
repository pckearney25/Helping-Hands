var path = require("path");
var db = require("../models");

// Get route for volunteer sign IN
  app.get("/api/signin/volunteer", function(req, res) {
    db.Volunteer.findAll({
      where: {
        email: req.params.email,
        password: req.params.password
      }
    })
      .then(function(dbVolunteer) {
        res.json(dbVolunteer);
      });
  });
  
    // Get route for organization sign IN
  app.get("/api/signin/organization", function(req, res) {
    db.Organization.findAll({
      where: {
        email: req.params.email,
        password: req.params.password
      }
    })
          .then(function(dbOrganization) {
        res.json(dbOrganization);
      });
  });
  
    // Get route for volunteer sign UP (check to see if in db)
  app.get("/api/signup/volunteer", function(req, res) {
    db.Volunteer.findAll({
      where: {
        email: req.params.email,
      }
    })
      .then(function(dbVolunteer) {
        res.json(dbVolunteer);
      });
  });
  
    // Get route for organization sign UP (check to see if in db)
  app.get("/api/signup/organization", function(req, res) {
    db.Organization.findAll({
      where: {
        email: req.params.email,
      }
    })
          .then(function(dbOrganization) {
        res.json(dbOrganization);
      });
  });
  
    // POST route for adding a new volunteer
  app.post("/api/signup/volunteer", function(req, res) {
    console.log(req.body);
    db.Volunteer.create({
      email: req.body.email,
      password: req.body.password
      // etc. 
    })
      .then(function(dbVolunteer) {
        res.json(dbVolunteer);
      });
  });
  
      // POST route for adding a new organization
  app.post("/api/signup/organization", function(req, res) {
    console.log(req.body);
    db.Organization.create({
      email: req.body.email,
      password: req.body.password
      // etc. 
    })
      .then(function(dbOrganization) {
        res.json(dbOrganization);
      });
  });