const {SalesData} = require('../models');

exports.salesdataGet = () => {
    return SalesData.findAll({
        
    });
}

exports.salesdataCreate = (req) => {
    return SalesData.create({
        
        'userid' : req.body.userid,
        'productcode' : req.body.productcode,
        'salesunits' : req.body.salesunits,
        'salesamount' : req.body.salesamount,
        'salesmonth' : req.body.salesmonth,
        'salesdate' : req.body.salesdate,
        'salesyear' : req.body.salesyear,
        'salescode' : req.body.salescode,
        'salesmode' : req.body.salesmode
    });
}