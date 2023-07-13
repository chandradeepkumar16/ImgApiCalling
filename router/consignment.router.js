const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {Consignment} = require('../models');

const consignmentRepo = require('../repository/consignment.repo');

router.get('/consignment', async (req, res) => {
    var consignmentList = await consignmentRepo.consignmentGet();
    return res.send(consignmentList);
    
});

router.post('/consignment', async (req, res) =>{
    // console.log(req.body);
    if(req.body)
    {
        var result = await consignmentRepo.consignmentCreate(req);
        return res.send(result);
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

router.put('/consignment/:id' ,async (req,res)=>{
    console.log(req.body)

    if(req.params.id)
    {
        await consignmentRepo.consignmentUpdate(req);
        return res.send({"Status" : "Successfully Updated"});
    }else
    {
        return res.send({"Error" : "Data not found."});
    }

})

module.exports = router;