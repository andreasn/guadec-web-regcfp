"use strict";

module.exports = function(sequelize, DataTypes) {
  var Registration = sequelize.define("Registration", {
    is_public: DataTypes.BOOLEAN,
    arrival_date: DataTypes.DATE,
    departure_data: DataTypes.DATE,
    shirt_type: DataTypes.ENUM('Unisex', 'Male'),
    shirt_size: DataTypes.ENUM('XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'),
    paid: DataTypes.DECIMAL(10, 2) // Store the amount paid so we can accomodate for changes
  }, {
    classMethods: {
      associate: function(models) {
        Registration.belongsTo(models.User);
      }
    }
  });

  return Registration;
};
