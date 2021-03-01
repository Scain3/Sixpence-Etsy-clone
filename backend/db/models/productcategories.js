'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCategories = sequelize.define('ProductCategories', {
    productId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  ProductCategories.associate = function(models) {
    // associations can be defined here
  };
  return ProductCategories;
};