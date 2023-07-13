const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const { Schemes } = require('../models');

const schemesRepo = require('../repository/schemes.repo');

router.get('/schemes', async (req, res) => {
    var schemesList = await schemesRepo.schemesGet();
    return res.send(schemesList);
    
});

module.exports = router;