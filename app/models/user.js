module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    hh_role: {
      type: DataTypes.STRING
    }
  });
  return User;
};
