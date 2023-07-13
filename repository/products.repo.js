const {Products} = require('../models');

exports.productsGet = () => {
    return Products.findAll({
        
    });
}