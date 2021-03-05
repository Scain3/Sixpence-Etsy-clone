const { Op } = require('sequelize');
const { ProductListing }= require('../../db/models');


const searchProducts = async (term) => {
    return await ProductListing.findAll({
        where: {
            [Op.or]: [{title: { [Op.iLike]: term }}, {category: { [Op.iLike]: term }}, {description: { [Op.iLike]: term }}]
        }
    });
}



module.exports = { searchProducts };
