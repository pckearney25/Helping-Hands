module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define("Organization", {
    organizer: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone_number: {
      type: DataTypes.STRING
    }
  });
  return Organization;
};
