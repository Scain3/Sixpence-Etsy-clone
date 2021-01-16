'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductListing = sequelize.define('ProductListing', {
    sellerId: DataTypes.INTEGER,
    title: DataTypes.NUMERIC,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  ProductListing.associate = function(models) {
    // associations can be defined here
    ProductListing.belongsTo(models.User, {foreignKey: "sellerId"})
    ProductListing.hasMany(models.Cart, {foreignKey: "productId"})
  };
  return ProductListing;
};
