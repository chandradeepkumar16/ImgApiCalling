const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const { NotificationStatusTracking } = require('../models');

const notificationstatustrackerRepo = require('../repository/notificationstatustracker.repo');

router.get('/notificationstatustracker', async (req, res) => {
    var notificationstatustrackerList = await notificationstatustrackerRepo.notificationstatustrackerGet();
    return res.send(notificationstatustrackerList);
    
});

router.post('/notificationstatustracker', async (req, res) =>{
    // console.log(req.body);
    if(req.body)
    {
        var result = await notificationstatustrackerRepo.notificationstatustrackerCreate(req);
        return res.send(result);
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

router.put('/notificationstatustracker/:id', async (req, res) =>{
    if(req.params.id)
    {
        await notificationstatustrackerRepo.notificationstatustrackerUpdate(req);
        return res.send({"Status" : "Successfully Updated"});
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

module.exports = router;