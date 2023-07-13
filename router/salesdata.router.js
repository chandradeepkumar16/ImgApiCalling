const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {SalesData} = require('../models');

const salesRepo = require('../repository/salesdata.repo');

router.get('/sales', async (req, res) => {
    var salesList = await salesRepo.salesdataGet();
    return res.send(salesList);
    
});

router.post('/sales', async (req, res) =>{
    // console.log(req.body);
    if(req.body)
    {
        var result = await salesRepo.salesdataCreate(req);
        return res.send(result);
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

module.exports = router;