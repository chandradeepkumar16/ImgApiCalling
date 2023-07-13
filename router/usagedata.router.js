const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const { UsageData } = require('../models');

const UsageDataRepo = require('../repository/usagedata.repo');

// router.get('/clockings', async (req, res) => {
//     var ClockingDataList = await ClockingDataRepo.clockdataGet();
//     return res.send(ClockingDataList);
// });

router.post('/usages', async (req, res) =>{
    // console.log(req.body);
    if(req.body)
    {
        var result = await UsageDataRepo.usagedataCreate(req);
        return res.send(result);
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

module.exports = router