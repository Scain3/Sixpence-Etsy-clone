const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Cart, User, ProductListing } = require("../../db/models");

router.post('/:productListingId(\\d+)', asyncHandler(async(req, res, next) => {
    const user = await User.findByPk(req.body.userId);
    // const product = await ProductListing.findByPk(req.params.productListingId);
    const product = await Cart.findAll({
        where: {
            id: req.params.id
        }
    })
    const cartItem = await Cart.create(
        {
        buyerId: user.id,
        title: product.title,
        image: product.image,
        price: product.price
    })
    res.json({
        cartItem
    })
}))

router.delete('/:cartId(\\d+)', asyncHandler(async(req, res, next) => {
    const cart = await Cart.findByPk(req.params.cartId);
    await cart.destroy();
    res.json({
        message: 'Success!'
    })
}))

module.exports = router;
