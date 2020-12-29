const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Cart, User, ProductListing } = require("../../db/models");

router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const cartItems = await Cart.create(
        {
        buyerId: User.id,
        title: ProductListing.title,
        image: ProductListing.image,
        price: ProductListing.price
    },{
        include: [User, ProductListing]
    })
    res.json({
        cartItems
    })
}))

module.exports = router;
