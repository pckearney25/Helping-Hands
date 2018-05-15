module.exports = function(sequelize, DataTypes) {
  var VolunteerEvents = sequelize.define("Volunteer_events", {
    vol_id: {
      type: DataTypes.INTEGER
    },
    event_id: {
      type: DataTypes.INTEGER
    }
  });
  return VolunteerEvents;
};
