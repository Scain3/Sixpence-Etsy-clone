const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Cart, User, ProductListing } = require("../../db/models");


//add to cart
router.post('/:productListingId(\\d+)', asyncHandler(async(req, res, next) => {
    const user = await User.findByPk(req.body.userId);

    const product = await ProductListing.findAll({
        where: {
            id: req.params.productListingId
        },


    })


    const cartItem = await Cart.create(

        {

        buyerId: user.id,
        productId: product[0].id,
        title: "",
        image: "",
        price: 0


    }

    );
    cartItem.dataValues.title = product[0].title
    cartItem.dataValues.image = product[0].image
    cartItem.dataValues.price = product[0].price

    res.json({
        cartItem
    })
}))

//remove from cart
router.delete('/:cartId(\\d+)', asyncHandler(async(req, res, next) => {
    const cart = await Cart.findByPk(req.params.cartId);
    await cart.destroy();
    res.json({
        message: 'Success!'
    })
}))

//purchase
// router.delete('/:cartId(\\d+)', asyncHandler(async(req, res, next) => {
//     const cart = await Cart.findByPk(req.params.cartId);
//     await cart.destroy();
//     res.json({
//         message: 'Success!'
//     })
// }))

module.exports = router;
