'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  Favorites.associate = function(models) {
    // associations can be defined here
  };
  return Favorites;
};