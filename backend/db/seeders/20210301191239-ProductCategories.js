'use strict';
const { ProductListing, Category } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const product1 = await ProductListing.findOne({
      where: {
        title: 'Blue Bridesmaids Gown'
      }
    })

    const product2 = await ProductListing.findOne({
      where: {
        title: 'Twirl Ready Gown'
      }
    })

    const product3 = await ProductListing.findOne({
      where: {
        title: 'Victorian Wedding Gown'
      }
    })

    const product4 = await ProductListing.findOne({
      where: {
        title: 'Your Something Borrowed'
      }
    })

    const product5 = await ProductListing.findOne({
      where: {
        title: 'Diamond Saphire Necklace'
      }
    })

    const product6 = await ProductListing.findOne({
      where: {
        title: 'Unveil the Bride: As seen on Project Runway'
      }
    })

    const product7 = await ProductListing.findOne({
      where: {
        title: 'Blue Strapped Shoes'
      }
    })

    const product8 = await ProductListing.findOne({
      where: {
        title: 'Blue Bridal Gown'
      }
    })

    const product9 = await ProductListing.findOne({
      where: {
        title: 'Mother of the Bride Gown'
      }
    })
    const product10 = await ProductListing.findOne({
      where: {
        title: 'Mermaid Gown'
      }
    })
    const product11 = await ProductListing.findOne({
      where: {
        title: 'Mermaid Gown With Shawl'
      }
    })
    const product12 = await ProductListing.findOne({
      where: {
        title: 'Princess Gown'
      }
    })



    const category1 = await Category.findOne({
      where: {
        categoryName: "Something Old"
      }
    })

    const category2 = await Category.findOne({
      where: {
        categoryName: "Something New"
      }
    })

    const category3 = await Category.findOne({
      where: {
        categoryName: "Something Borrowed"
      }
    })
    const category4 = await Category.findOne({
      where: {
        categoryName: "Something Blue"
      }
    })


    return queryInterface.bulkInsert('ProductCategories', [
      {
        productId: product1.id,
        categoryId: category4.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: product2.id,
        categoryId: category2.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: product3.id,
        categoryId: category1.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: product4.id,
        categoryId: category3.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: product5.id,
        categoryId: category3.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: product6.id,
        categoryId: category1.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: product7.id,
        categoryId: category4.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: product8.id,
        categoryId: category4.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: product9.id,
        categoryId: category4.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: product10.id,
        categoryId: category2.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: product11.id,
        categoryId: category2.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: product12.id,
        categoryId: category2.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
