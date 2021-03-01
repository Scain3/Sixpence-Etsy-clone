'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        categoryName:"Something Old",
        description: `Traditionally the "Something Old" category
                      is an heirloom passed down from a loved one,
                      but here at Sixpence we target the Non-traditional
                      bride. Check the Something Old category for vintage
                      finds and gently-used dresses.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName:"Something New",
        description: `Sixpence is not just for your vintage and gently-used finds.
                      It is also a playground for independent and up and coming fashion
                      designers. Make your mark by listing your own dress or support
                      an upcoming artist by purchasing from an independent designer.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName:"Something Borrowed",
        description: `Wedding dresses not in your price range? Have the urge to give back to
                      a bride in need, but cannot bare to part completely with your wedding gown.
                      Why not checkout our Wedding Exchange program? Here you can post the listing
                      for your Dress and make a barter agreement to borrow the dress for a limited time.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName:"Something Blue",
        description: `Every bride needs one item in their favorite shade of blue. Here you can find everything
                      from blue flowers, blue jewels, blue bridesmaids gowns, or even blue bridal gowns. Whatever
                      meets your fancy. It's a blue world, we're just living in it.`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Categories', null, {})
  }
};
