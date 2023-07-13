const { Consignment } = require('../models');

exports.consignmentGet = () => {
    return Consignment.findAll({
        
    });
}

exports.consignmentCreate = (req) => {
    return Consignment.create({
          
        'orderid' : req.body.orderid,
        'orderdate' : req.body.orderdate,
        'orderamount' : req.body.orderamount,
        'consigneename' : req.body.consigneename,
        'origincity' : req.body.origincity,
        'destinationcity' : req.body.destinationcity,
        'destinationstate' : req.body.destinationstate,
        'sentby' : req.body.sentby,
        'orderdetails' : req.body.orderdetails,
        'currentstatus' : req.body.currentstatus,
        'shipperdetails' : req.body.shipperdetails,
        'notes' : req.body.notes
    });
}

exports.consignmentUpdate = (req) => {
    return Consignment.update({
        'origincity' : req.body.origincity,
        'destinationcity' : req.body.destinationcity,
        'destinationstate' : req.body.destinationstate,
        'sentby' : req.body.sentby,
        'orderdetails' : req.body.orderdetails,
        'currentstatus' : req.body.currentstatus,
        'shipperdetails' : req.body.shipperdetails,
        'notes' : req.body.notes,
    }, {
        where : {
            'id' : req.params.id
        }
    });
}