// const { transactionconsignment } = require('../models');

const transactionconsignment = require('../models/transactionconsignment')

exports.consignmentTransactionGet = () => {
    return transactionconsignment.findAll({
    });
}

exports.consignmentTransactionCreate = (req) => {
    return transactionconsignment.create({
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

