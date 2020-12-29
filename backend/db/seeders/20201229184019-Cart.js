'use strict';
const { User } = require("../models");
module.exports = {
  up: (queryInterface, Sequelize) => {
    const thisBuyer = await User.findByPk(id, {
      where: {
        id
      }
    })

      return queryInterface.bulkInsert('Carts', [
        {
          buyerId: thisBuyer,
          title: 'Raindrops on Roses',
          image: "https://media.giphy.com/media/5aWCuBSzoiFeznnz21/giphy.gif",
          price: 45.55,
        },
        {
          buyerId: thisBuyer,
          title: 'Unveil the Bride: As seen on Project Runway',
          image: 'https://media.giphy.com/media/iDh0BgzUvwEULFtiWd/giphy.gif',
          price: 55.45,
        },
        {
          buyerId: thisBuyer,
          title: 'Vintage Inspired Gown',
          image: 'https://media.giphy.com/media/8sei1aTZ0XhuM/giphy.gif',
          price: 95.25,
        },
        {
          buyerId: thisBuyer,
          title: 'Victorian Wedding Gown',
          image: "https://media.giphy.com/media/3o7520fUG9qwnAk2Kk/giphy.gif",
          price: 45.55,
        },
        {
          buyerId: thisBuyer,
          title: 'Doggy Bride',
          image: 'https://media.giphy.com/media/pZanynfbmWe5y/giphy.gif',
          price: 20.25,
        },
        {
          buyerId: thisBuyer,
          title: 'Twirl Ready Gown',
          image: 'https://media.giphy.com/media/c6OvfaQKPANkJ5d9YO/giphy.gif',
          price: 50.55,
        },
        {
          buyerId: thisBuyer,
          title: 'Blue Bridesmaids Gown',
          image: "https://media.giphy.com/media/HYvQYlwt8fMDPHI8o5/giphy.gif",
          price: 45.55,
        },
        {
          buyerId: thisBuyer,
          title: 'Your Something Borrowed',
          image: 'https://media.giphy.com/media/Hxcmei9tsG2wE/giphy.gif',
          price: 0.00,
        },
        {
          buyerId: thisBuyer,
          title: 'Diamond Saphire Necklace',
          image: 'https://media.giphy.com/media/nxgSkZNaOFMoo/giphy.gif',
          price: 0.00,
        },
        {
          buyerId: thisBuyer,
          title: 'Sunflower Bouquet',
          image: "https://media.giphy.com/media/eMJlHwZrPIEdLiRyKW/giphy.gif",
          price: 45.55,
        },
        {
          buyerId: thisBuyer,
          title: 'Blue Strapped Shoes',
          image: "https://media.giphy.com/media/iqsydcFzUjNwQ3sPyM/giphy.gif",
          price: 25.45,
        },
        {
          buyerId: thisBuyer,
          title: 'Wedding Shoes',
          image: 'https://media.giphy.com/media/oHFG3yhA43OGA/giphy.gif',
          price: 30.55,
        },
        {
          buyerId: thisBuyer,
          title: 'Blue Bridal Gown',
          image: "https://media.giphy.com/media/l3vReOIs4ECAtKWE8/giphy.gif",
          price: 45.55,
        },
        {
          buyerId: thisBuyer,
          title: 'Mother of the Bride Gown',
          image: 'https://media.giphy.com/media/ErYZakw2keP6M/giphy.gif',
          price: 25.45,
        },
        {
          buyerId: thisBuyer,
          title: 'Mermaid Gown',
          image: 'https://media.giphy.com/media/E3IbJBdAt1JOE/giphy.gif',
          price: 90.55,
        },
        {
          buyerId: thisBuyer,
          title: 'Mermaid Gown With Shawl',
          image: "https://media.giphy.com/media/aIgRA1jIsfuqQ/giphy.gif",
          price: 95.55,
        },
        {
          buyerId: thisBuyer,
          title: 'Princess Gown',
          image: 'https://media.giphy.com/media/htSC9eUpwau0TrqDOm/giphy.gif',
          price: 100.45,
        },
        {
          buyerId: thisBuyer,
          title: 'Brown Bridesmaids Gown',
          image: 'https://media.giphy.com/media/Bfeprn3ne91oQ/giphy.gif',
          price: 75.55,
        },
        {
          buyerId: thisBuyer,
          title: 'Raindrops on Roses',
          image: "https://media.giphy.com/media/5aWCuBSzoiFeznnz21/giphy.gif",
          price: 45.55,
        },
    ], {});

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
