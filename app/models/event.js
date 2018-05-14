// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "event" model that matches up with DB
var Event = sequelize.define("event", {
  event_name: {
    type: Sequelize.STRING
  },
  event_desc: {
    type: Sequelize.STRING
  },
  event_loc: {
    type: Sequelize.STRING
  },
  event_date: {
    type: Sequelize.INTEGER
  },
  event_time: {
    type: Sequelize.INTEGER
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Event.sync();

// Makes the event Model available for other files (will also create a table)
module.exports = Event;
