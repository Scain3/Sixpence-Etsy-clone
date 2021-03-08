'use strict';
const { User } = require("../models");
module.exports = {
  up: async(queryInterface, Sequelize) => {
 
   return queryInterface.bulkInsert('ProductListings', [
     {
       sellerId: 1,
       title: 'Raindrops on Roses',
       category: 'Something New',
       description: `Celebrate your autumn wedding with beautiful red roses.
       Roses are indeed the best flower for an autumn wedding as these bouquets stay absolutely perfect
       even in fall weather. The red color hue will make your wedding dress sparkle. The
       only question you'll be having is, "Will this bouquet outshine my gown?".`,
       image: "https://media.giphy.com/media/5aWCuBSzoiFeznnz21/giphy.gif",
       price: 45.55,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      sellerId: 2,
      title: 'Unveil the Bride',
      category: 'Something Old',
      description: `I wore this veil to my own wedding and I never thought I could feel so beautiful.
                    Everyone said I looked just like a run-way model. Now I'm happy to re-sale this used
                    wig for a beautiful bride on her wedding day. All I ask is that you please send photos
                    of you wearing your veil on your wedding day.`,
      image: 'https://media.giphy.com/media/iDh0BgzUvwEULFtiWd/giphy.gif',
      price: 55.45,
      createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      sellerId: 3,
      title: 'Vintage Inspired Gown',
      category: 'Something Old',
      description: `This Natalie Wood inspired wedding gown is a dream. As a fashion design student,
              it has always been my dream to create 1960s vintage-inspired wedding gowns. Only my
              lack of experience has made me not the ideal candidate for most fashion empires. I've
              decided to create my own impire and this is my first stance of stepping out with my own
              fashion line. `,
      image: 'https://media.giphy.com/media/8sei1aTZ0XhuM/giphy.gif',
      price: 95.25,
      createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      sellerId: 1,
      title: 'Victorian Wedding Gown',
      category: 'Something Old',
      description: `I've decided it's time to put my wedding dress on the market.
                    My daughter is getting married and has politely disclosed to me
                    that my dress is now too old fashioned. It is an Old Victorian style
                    dress and I'm sure it will make some lucky bride very happy.`,
      image: "https://media.giphy.com/media/3o7520fUG9qwnAk2Kk/giphy.gif",
      price: 45.55,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     sellerId: 2,
     title: 'Doggy Bride',
     category: 'Something Old',
     description: `My beautful pup is all grown up now and has now celebrated
                  her wedding day. She is now no longer in need of this veil so
                  I'll be happy to give this puppy veil to the next doggy bride in need.`,
     image: 'https://media.giphy.com/media/pZanynfbmWe5y/giphy.gif',
     price: 20.25,
     createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     sellerId: 3,
     title: 'Twirl Ready Gown',
     category: 'Something New',
     description: `This gown means a lot to me as it was the first wedding gown I ever designed
                    in fashion school. I entered in as a sample for my work at Project Runway
                    but unfortunately it didn't make the cut. Anyway I'm happy to get it off
                    my hands. It's a brand new gown that is sure to make the new bride very happy.`,
     image: 'https://media.giphy.com/media/c6OvfaQKPANkJ5d9YO/giphy.gif',
     price: 50.55,
     createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sellerId: 1,
      title: 'Blue Bridesmaids Gown',
      category: 'Something Blue',
      description: `Pick a gown your bridesmaids will love and get your
                  "Something Blue" as well. They'll be twirl ready in no time.`,
      image: "https://media.giphy.com/media/HYvQYlwt8fMDPHI8o5/giphy.gif",
      price: 45.55,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     sellerId: 2,
     title: 'Your Something Borrowed',
     category: 'Something Borrowed',
     description: `I'm not ready to part with my wedding gown but I'm
                  wlling to rent out to an interested bride for greatly
                  reduced price. Please handle with care and message me if
                  you need any cleaning and care details.`,
     image: 'https://media.giphy.com/media/Hxcmei9tsG2wE/giphy.gif',
     price: 0.00,
     createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     sellerId: 3,
     title: 'Diamond Saphire Necklace',
     category: 'Something Borrowed',
     description: `This diamond saphire necklace is a part of the Something Borrowed exchange program.
                    Every bride needs something fabulous on their wedding day so I'm loaning this one out
                    for good luck. As a reminder, this is a loan, and if not returned will be expected at
                    a full price payment. `,
     image: 'https://media.giphy.com/media/nxgSkZNaOFMoo/giphy.gif',
     price: 0.00,
     createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sellerId: 1,
      title: 'Sunflower Bouquet',
      category: 'Something New',
      description: `I've arranged this bouquet to match a bride with spunk and personality.
                    If these seem like your perfect fit please continue to purchase.`,
      image: "https://media.giphy.com/media/eMJlHwZrPIEdLiRyKW/giphy.gif",
      price: 45.55,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     sellerId: 2,
     title: 'Blue Strapped Shoes',
     category: 'Something Blue',
     description: `Get your Something Blue right here as a unique touch to your outfit.
                    We offer several different syles so pick a shoe you like.`,
     image: "https://media.giphy.com/media/iqsydcFzUjNwQ3sPyM/giphy.gif",
     price: 25.45,
     createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     sellerId: 3,
     title: 'Wedding Shoes',
     category: 'Something Old',
     description: `Aside from being gorgeous, these are actually pretty comfortable.
                    I didn't have much time for sitting at my reception. Too busy partying,
                    I never felt the urge to take them off.`,
     image: 'https://media.giphy.com/media/oHFG3yhA43OGA/giphy.gif',
     price: 30.55,
     createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sellerId: 1,
      title: 'Blue Bridal Gown',
      category: 'Something Blue',
      description: `Who says you have to wear white on your wedding day. Get the perfect gown
                    and your something blue all in one.`,
      image: "https://media.giphy.com/media/l3vReOIs4ECAtKWE8/giphy.gif",
      price: 45.55,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     sellerId: 2,
     title: 'Mother of the Bride Gown',
     category: 'Something Blue',
     description: `Is it white and gold or is it black and blue?
                  Get the gown that started a twitter war.`,
     image: 'https://media.giphy.com/media/ErYZakw2keP6M/giphy.gif',
     price: 25.45,
     createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     sellerId: 3,
     title: 'Mermaid Gown',
     category: 'Something Old',
     description: `This is  a designer piece that I got on sale
                    at ebay. It never fit me well enough so I'm happy
                    to get is off of my hands for less than half the price.`,
     image: 'https://media.giphy.com/media/E3IbJBdAt1JOE/giphy.gif',
     price: 90.55,
     createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      sellerId: 1,
      title: 'Mermaid Gown With Shawl',
      category: 'Something New',
      description: `This mermaid gown is truly stunning and the shall adds
                    a classic touch.`,
      image: "https://media.giphy.com/media/aIgRA1jIsfuqQ/giphy.gif",
      price: 95.55,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     sellerId: 2,
     title: 'Princess Gown',
     category: 'Something New',
     description: `Feel like a princess in this bridal gown. You won't
                    want to wear anything else.`,
     image: 'https://media.giphy.com/media/htSC9eUpwau0TrqDOm/giphy.gif',
     price: 100.45,
     createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     sellerId: 3,
     title: 'Brown Bridesmaids Gown',
     category: 'Something Old',
     description: `My best friend forced us to wear this brown dress for her wedding.
                  At first, we were all hesitant but it was truly flattering to all
                  the bridesmaids.`,
     image: 'https://media.giphy.com/media/Bfeprn3ne91oQ/giphy.gif',
     price: 75.55,
     createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: async(queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductListings', null, {});
  }
};
