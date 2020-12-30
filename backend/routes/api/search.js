const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { searchProducts } = require('./searchQuery')

router.get('/', asyncHandler(async(req, res)=> {
    let products;
    let error = '';
    try{
        products = await searchProducts(`%${req.query.term}%`);
    } catch (e) {
        console.error(e);
        error = `An error ocurred that reads "${e.message}". Check the console for more details.`;
    }
    res.json({
        listTitle: 'Search Results',
        error,
        products
    })
}))

module.exports = router;
