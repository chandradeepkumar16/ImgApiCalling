const { Negotiator } = require('../models');

exports.negotiatorsGet = () => {
    return Negotiator.findAll({
        
    });
}

exports.negotiatorsCreate = (req) => {
    return Negotiator.create({
        userid: req.body.userid,
        productname: req.body.productname,
        boxquantity: req.body.boxquantity,
        recurring: req.body.recurring,
        recurringDays: req.body.recurringDays,
        leadrank: req.body.leadrank,
        city: req.body.city,
        state: req.body.state,
        totalpieces: req.body.totalpieces,
        totalorderplaced: req.body.totalorderplaced,
        checkvd: req.body.checkvd,
        checkcd: req.body.checkcd,
        volumediscount: req.body.volumediscount,
        totalaftervd: req.body.totalaftervd,
        cashpayment: req.body.cashpayment,
        cashdiscount: req.body.cashdiscount,
        finalamount: req.body.finalamount,
        invoicelink:req.body.invoicelink,
        businessname: req.body.businessname,
        personname: req.body.personname,
        phonenumber: req.body.phonenumber,
        emailaddress: req.body.emailaddress,
        pincode: req.body.pincode,
        address: req.body.address,
        mrp: req.body.mrp,
        rp: req.body.rp,
        totalBeforeDiscount :req.body.totalBeforeDiscount,
        totalAfterCashDiscount: req.body.totalAfterCashDiscount
    });
}