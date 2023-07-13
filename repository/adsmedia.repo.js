const { AdsMedia } = require('../models');

exports.adsmediaGet = () => {
    return AdsMedia.findAll({
        
    });
}