const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { ProductListing, User } = require("../../db/models");

//route to get all product listings
router.get('/', asyncHandler(async(req, res)=> {
    const productItem = await ProductListing.findAll();
    res.json({
        product: productItem,
    })
}));

//route to get single productListing that matches id
router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const productItem = await ProductListing.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json({
        singleItem: productItem
    })
}));

router.post('/add-a-listing', asyncHandler(async(req, res, next) => {
    const user = await User.findOne({
        where: {
            username: req.body.userId
        }
    })
    const product = await ProductListing.create({
        userId: user.id,
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price
    })
    res.json({
        productItem: product
    })
}))

module.exports = router;
