const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {Products} = require('../models');

const productsRepo = require('../repository/products.repo');

router.get('/products', async (req, res) => {
    var productsList = await productsRepo.productsGet();
    return res.send(productsList);
    
});

// router.post('/beatjobs', async (req, res) =>{
//     // console.log(req.body);
//     if(req.body)
//     {
//         var result = await beatRepo.beatjobsCreate(req);
//         return res.send(result);
//     }else
//     {
//         return res.send({"Error" : "Data not found."});
//     }
// })

module.exports = router;