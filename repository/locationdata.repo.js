const { LocationData } = require('../models');

exports.locationdataGet = () => {
    return LocationData.findAll({
        
    });
}

exports.locationdataCreate = (req) => {
    return LocationData.create({
        userid: req.body.userid,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        stampdate: req.body.stampdate,
        stamptime: req.body.stamptime
    });
}