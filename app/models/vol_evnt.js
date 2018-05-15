module.exports = function(sequelize, DataTypes) {
  var VolunteerEvents = sequelize.define("VolunteerEvents", {
    vol_id: {
      type: DataTypes.INTEGER
    },
    event_id: {
      type: DataTypes.INTEGER
    }
  });
  return VolunteerEvents;
};
