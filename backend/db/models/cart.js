'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    buyerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
  };
  return Cart;
};