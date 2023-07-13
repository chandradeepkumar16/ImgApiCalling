const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {ClockingData} = require('../models');

const ClockingDataRepo = require('../repository/clockingdata.repo');

// router.get('/clockings', async (req, res) => {
//     var ClockingDataList = await ClockingDataRepo.clockdataGet();
//     return res.send(ClockingDataList);
// });

router.post('/clockings', async (req, res) =>{
    // console.log(req.body);
    if(req.body)
    {
        var result = await ClockingDataRepo.clockdataCreate(req);
        return res.send(result);
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

module.exports = router;