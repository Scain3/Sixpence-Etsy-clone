'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductListing = sequelize.define('ProductListing', {
    userId: DataTypes.INTEGER,
    title: DataTypes.NUMERIC,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  ProductListing.associate = function(models) {
    // associations can be defined here
    ProductListing.belongsTo(models.User, {foreignKey: "userId"})
  };
  return ProductListing;
};
