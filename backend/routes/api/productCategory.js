const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { ProductCategory, category } = require("../../db/models");

router.get('/', asyncHandler(async(req, res)=> {
    const category = await ProductCategory.findAll();
    res.json({
        category,
    })
}));
