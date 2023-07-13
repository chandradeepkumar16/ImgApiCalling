const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const { Notifications } = require('../models');

const notificationRepo = require('../repository/notification.repo');

router.get('/notifications', async (req, res) => {
    var notificationList = await notificationRepo.notificationsGet();
    return res.send(notificationList);
    
});

router.post('/notifications' , async(req, res)=>{
    console.log(req.body)

    // if(req.body){

    //     var result = await Notifications.create({
    //         'id': req.body.id,
    //         'userid' : req.body.userid,
    //         'title' : req.body.title,
    //         'description' : req.body.description,
    //         'imagelink' : req.body.imagelink,
    //         'state' : req.body.state,
    //         'markAsReadClicked' : req.body.markAsReadClicked,
    //         'taskDoneClicked' : req.body.taskDoneClicked
    //     });

    //     return res.send(result);
    // }else{
    //     return res.send({"error" :"body not found"});
    // }



    if(req.body)
    {
        var result = await notificationRepo.notificationsCreate(req);
        return res.send(result);

    }else
    {
        return res.send({"Error" : "Data not found."});
    }

});


router.put('/notifications/:id' ,async (req,res)=>{
    console.log(req.body)

    // if(req.body){
    //     var result = await Notifications.update({
    //         'markAsReadClicked' : req.body.markAsReadClicked,
    //         'taskDoneClicked' : req.body.taskDoneClicked,
    //     },
    //     { where : {
    //             'id' : req.body.id
    //         }
    //     });
    //     return res.send(result)
    // }else{
    //     return res.send({"error" : "body not found"});
    // }

    if(req.params.id)
    {
        await notificationRepo.notificationsUpdate(req);
        return res.send({"Status" : "Successfully Updated"});
    }else
    {
        return res.send({"Error" : "Data not found."});
    }


})

module.exports = router;