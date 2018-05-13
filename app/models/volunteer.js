// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "volunteer" model that matches up with DB
var Volunteer = sequelize.define("volunteer", {
    volunteer_name : {
    type: Sequelize.STRING
  },
  volunteer_desc: {
    type: Sequelize.STRING
  },
  volunteer_loc: {
    type: Sequelize.STRING
  },
  volunteer_date: {
    type: Sequelize.INTEGER
  },
  volunteer_time: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: false
});

// Syncs with DB
Volunteer.sync();

// Makes the volunteer Model available for other files (will also create a table)
module.exports = Volunteer;
