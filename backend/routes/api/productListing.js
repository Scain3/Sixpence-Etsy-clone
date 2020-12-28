const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { ProductListing, User } = require("../../db/models");

router.get('/', asyncHandler(async(req, res)=> {
    const productItem = await ProductListing.findAll();
    res.json({
        product: productItem,
    })
}));
