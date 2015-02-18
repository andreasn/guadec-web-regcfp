"use strict";

module.exports = function(sequelize, DataTypes) {
  var Paper = sequelize.define("Paper", {
    title: DataTypes.STRING,
    summary: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Paper.belongsTo(models.User);
      }
    }
  });

  return Paper;
};
