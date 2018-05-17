module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    event_name: {
      type: DataTypes.STRING
    },
    event_desc: {
      type: DataTypes.STRING
    },
    event_loc: {
      type: DataTypes.STRING
    },
    event_date: {
      type: DataTypes.DATEONLY
    },
    event_time: {
      type: DataTypes.TIME
      
    }
  // }, 
//  {
    // classMethods: {
    //   associate: function(models) {
    //     Events.hasMany(models.Volunteers);
    //   }
    // }
  
  });
  Events.associate = function(models) {
    // We're saying that a Product should belong to a Department
    // A Product can't be created without a Department due to the foreign keyconstraint
 
    Events.hasMany(models.Volunteer_Events);
  
};
  return Events;
};
