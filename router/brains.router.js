const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {Brain} = require('../models');

const brainRepo = require('../repository/brains.repo');

router.get('/brain', async (req, res) => {
    var brainList = await brainRepo.brainsGet();
    return res.send(brainList);
    
});

router.post('/brain', async (req, res) =>{
    if(req.body)
    {
        var result = await brainRepo.brainsCreate(req);
        return res.send(result);
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

module.exports = router;