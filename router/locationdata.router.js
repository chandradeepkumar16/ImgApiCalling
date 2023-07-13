const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {LocationData} = require('../models');

const LocationDataRepo = require('../repository/locationdata.repo');

router.get('/locations', async (req, res) => {
    var LocationDataList = await LocationDataRepo.locationdataGet();
    return res.send(LocationDataList);
});

router.post('/locations', async (req, res) =>{
    // console.log(req.body);
    if(req.body)
    {
        var result = await LocationDataRepo.locationdataCreate(req);
        return res.send(result);
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

module.exports = router;