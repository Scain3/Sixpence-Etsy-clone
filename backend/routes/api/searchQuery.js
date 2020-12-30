const { Op } = require('sequelize');
const { ProductListing }= require('../../db/models');


const searchProducts = async (term) => {
    return await ProductListing.findAll({where: { title: { [Op.iLike]: term }}});
}



module.exports = { searchProducts };
