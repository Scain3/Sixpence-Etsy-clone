'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    buyerId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.ProductListing, {foreignKey: 'productId'})
    Cart.belongsTo(models.User, {foreignKey: 'buyerId'})
  };
  return Cart;
};
