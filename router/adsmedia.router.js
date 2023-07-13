const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {AdsMedia} = require('../models');

const adsmediaRepo = require('../repository/adsmedia.repo');

router.get('/adsmedia', async (req, res) => {
    var adsmediaList = await adsmediaRepo.adsmediaGet();
    return res.send(adsmediaList);
    
});

module.exports = router;