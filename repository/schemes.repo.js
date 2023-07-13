const { Schemes } = require('../models');

exports.schemesGet = () => {
    return Schemes.findAll({
        
    });
}