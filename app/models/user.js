// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     username: {
//       type: DataTypes.STRING
//     },
//     password: {
//       type: DataTypes.STRING
//     },
//     hh_role: {
//       type: DataTypes.STRING
//     }
//   });
//   return User;
// };

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    hh_role: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Volunteer_Events);
      }
    }
  });
  return User;
};
