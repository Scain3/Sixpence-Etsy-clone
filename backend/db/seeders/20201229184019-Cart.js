'use strict';
const { User } = require("../models");
module.exports = {
  up: (queryInterface, Sequelize) => {
    const thisBuyer = await User.findByPk(id, {
      where: {
        id
      }
    })

      return queryInterface.bulkInsert('Carts', [{
        buyerId: thisBuyer,
        title,
        image,
        price
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
