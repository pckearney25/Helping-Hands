// // Dependencies
// // =============================================================

// // Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");

// // Creates a "Book" model that matches up with DB
// var Volunteer = sequelize.define("volunteer", {
//   //title: {
//     //type: Sequelize.STRING
//  // },
//   //author: {
//     //type: Sequelize.STRING
//   //},
//   //genre: {
//     //type: Sequelize.STRING
//   //},
//   //pages: {
//     //type: Sequelize.INTEGER
//   //}
// //}, {
//   //timestamps: false
// });

// // Syncs with DB
// Volunteer.sync();

// // Makes the Book Model available for other files (will also create a table)
// module.exports = Volunteer;

module.exports = function(sequelize, DataTypes){
  var Volunteer = sequelize.define("Volunteer", {
    event_name: {
      type: DataTypes.DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_loc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_date: {
      type: DateTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }

  });
  return Volunteer;
};
module.exports = function(sequelize, DataTypes) {
  var Volunteer = sequelize.define("volunteers", {
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    phone_num: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  });
  return Volunteer;
};
