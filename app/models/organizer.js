// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "organizer" model that matches up with DB
var Organizer = sequelize.define("organizer", {
    organizer: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone_num: {
    type: Sequelize.INTEGER
  },
  password: {
    type: Sequelize.STRING
  }

}, {
  timestamps: false
});

// Syncs with DB
Organizer.sync();

// Makes the organizer Model available for other files (will also create a table)
module.exports = Organizer;
