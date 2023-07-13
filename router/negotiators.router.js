const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {Negotiator} = require('../models');

const negotiatorRepo = require('../repository/negotiators.repo');

router.get('/negotiator', async (req, res) => {
    var negotiatorList = await negotiatorRepo.negotiatorsGet();
    return res.send(negotiatorList);
    
});

router.post('/negotiator', async (req, res) =>{
    if(req.body)
    {
        var result = await negotiatorRepo.negotiatorsCreate(req);
        return res.send(result);
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

module.exports = router;