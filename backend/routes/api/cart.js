const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Cart, User, ProductListing } = require("../../db/models");

router.post('/:productListingId(\\d+)', asyncHandler(async(req, res, next) => {
    const user = await User.findByPk(req.body.userId);

    const product = await ProductListing.findAll({
        where: {
            id: req.params.productListingId
        },


    })
    // console.log(product);
    // console.log(product[0].title);
    // console.log(product[0].image);
    // console.log(product[0].price);
    //This is working. This tells me we need to map through an array
    //console.log(product.title);

    //const newProduct = product[0];
    //console.log(newProduct.title);

    const cartItem = await Cart.create(
        // console.log(product),
        // console.log(product[0].title),
        //console.log(newProduct.title),
        {
            // include: {
            //     model: ProductListing,
            //     attributes: ['title', 'image', 'price']
            // },
        buyerId: user.id,
        productId: product[0].id,
        title: "",
        image: "",
        price: 0

        // title: product[0].title,
        // image: product[0].image,
        // price: product[0].price
    }

    );
    cartItem.dataValues.title = product[0].title
    cartItem.dataValues.image = product[0].image
    cartItem.dataValues.price = product[0].price
    // console.log(product.title)
    // console.log(product[0].title)
    console.log(product[0].title)
    console.log(cartItem.productId)
    console.log(cartItem.productId.title)
    console.log(cartItem.title)
    console.log(cartItem.price)
    console.log(cartItem.image)
    console.log(cartItem);
    //console.log(cartItem.productId)
    //console.log(cartItem.title)
    //console.log(cartItem.productId[0].title)
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
