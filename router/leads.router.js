const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {Leads} = require('../models');

const leadRepo = require('../repository/leads.repo');

router.get('/leads', async (req, res) => {
    var leadList = await leadRepo.leadsGet();
    return res.send(leadList);
})

router.post('/leads', async (req, res) =>{
    // console.log(req.body);
    if(req.body)
    {
        var result = await leadRepo.leadsCreate(req);
        return res.send(result);
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

router.put('/leads/:id', async (req, res) =>{
    if(req.params.id)
    {
        await leadRepo.leadsUpdate(req);
        return res.send({"Status" : "Successfully Updated"});
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

router.delete('/leads/:leadPhoneNumber', async (req, res) => {
    if(req.params.leadPhoneNumber)
    {
        await leadRepo.leadsDeleteBasedOnPhoneNumber(req);
        return res.send({"Status" : "Successfully Deleted"});
    }else
    {
        return res.send({"Error" : "Phone Number required"});
    }
})


module.exports = router;

// router.get('/leads', async (req, res) => {
//     var leadList = await Leads.findAll();
//     return res.send(leadList);
// })

// module.exports = router;