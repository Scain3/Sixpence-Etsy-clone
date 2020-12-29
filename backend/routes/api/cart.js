const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Cart } = require("../../db/models");

router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const cartItem = await Cart.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json({
        cartItem
    })
}))

module.exports = router;
