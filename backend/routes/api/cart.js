const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Cart, User, ProductListing } = require("../../db/models");

router.post('/:productListingId(\\d+)', asyncHandler(async(req, res) => {
    const user = await User.findByPk(req.body.userId);

    const product = await ProductListing.findAll({
        where: {
            id: req.params.productListingId
        }


    })
    // console.log(product);
    // console.log(product[0].title);
    // console.log(product[0].image);
    // console.log(product[0].price);
    //This is working. This tells me we need to map through an array
    //console.log(product.title);

    const newProduct = product[0];
    //console.log(newProduct.title);

    const cartItem = await Cart.create(
        // console.log(product),
        // console.log(product[0].title),
        //console.log(newProduct.title),
        {
        buyerId: user.id,
        title: newProduct.title,
        image: newProduct.image,
        price: newProduct.price
    }
    )
    console.log(cartItem)
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
