'use strict';
const { User, ProductListing } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const user1 = await User.findOne({
    //   where: {
    //     username: 'Demo-lition'
    //   }
    // })
    // const user2 = await User.findOne({
    //   where: {
    //     username: 'FakeUser1'
    //   }
    // })
    // const user3 = await User.findOne({
    //   where: {
    //     username: 'FakeUser2'
    //   }
    // })
    // const product1 = await ProductListing.findOne({
    //   where: {
    //     title: 'Victorian Wedding Gown'
    //   }
    // })
    // const product2 = await ProductListing.findOne({
    //   where: {
    //     title: 'Doggy Bride'
    //   }
    // })
    // const product3 = await ProductListing.findOne({
    //   where: {
    //     title: 'Twirl Ready Gown'
    //   }
    // })
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        productId: 1,
        starRating:5,
        description: `I bought demo-litions wedding dress
                      and it was very well taken care of.
                      No one could tell it was use and it
                      did not appear second-hand. I've taken
                      exceptionally good care of this dress
                      and hope to be re-selling it soon for
                      a lower price ofcourse.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        productId: 2,
        starRating: 5,
        description: `I nearly broke down in tears when my dog,Lucy,
                      walked down the aisle in this gown. You neve
                      seen a dog so happy. I'd love to buy more puppy
                      wedding magic from this store.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 3,
        starRating: 5,
        description: `I honestly feel bad for taking this gown off of this
                        designer's hands for such a steal. I purchased this
                        for my daughter's wedding day and I'm telling you
                        you've never seen a more beautiful bride. Simply gorgeous.`,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {})
  }
};
