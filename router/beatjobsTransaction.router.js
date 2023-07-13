const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {BeatjobsTransactions} = require('../models');

const beatTransRepo = require('../repository/beatjobsTransaction.repo');

router.get('/transaction/beatjobs', async (req, res) => {
    var beatjobTransList = await beatTransRepo.beatjobsTransactionGet();
    return res.send(beatjobTransList);
});

router.post('/transaction/beatjobs', async (req, res) =>{
    // console.log(req.body);
    if(req.body)
    {
        var result = await beatTransRepo.beatjobsTransactionCreate(req);
        return res.send(result);
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

module.exports = router;