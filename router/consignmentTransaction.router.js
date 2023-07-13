const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {transactionconsignment} = require('../models');

const consignmentTransactionRepo = require('../repository/consignmentTransaction.repo');

router.get('/consignmenttransaction', async (req, res) => {
    var consignmentTransactionList = await consignmentTransactionRepo.consignmentTransactionGet();
    return res.send(consignmentTransactionList);
    // return res.send("heheheh")
    
});

router.post('/consignmenttransaction', async (req, res) =>{
    // console.log(req.body);
    console.log(req.body)
    if(req.body){
        var result = await transactionconsignment.create({
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
            'notes' : req.body.notes,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        return res.send(result);
    }else{
        return res.send({"error" :"body not found"});
    }
})



module.exports = router;