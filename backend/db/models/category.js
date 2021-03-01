'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    categoryName: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
