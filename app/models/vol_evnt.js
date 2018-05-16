module.exports = function(sequelize, DataTypes) {
  var Volunteer_Events = sequelize.define("Volunteer_Events", {
    vol_id: {
      type: DataTypes.INTEGER
    },
    event_id: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        Volunteer_Events.hasOne(models.Events);
      }
    }
  });
  return Volunteer_Events;
};
