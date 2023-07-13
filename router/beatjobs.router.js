const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {Beatjobs} = require('../models');

const beatRepo = require('../repository/beatjobs.repo');

router.get('/beatjobs', async (req, res) => {
    // var beatjobList = await beatRepo.beatjobsGet();
    // return res.send(beatjobList);

    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    var message = "Hey there , Api is working !"

    // Fetch the data from the database with dynamic pagination
    const beats = await Beatjobs.findAll({
      offset,
      limit: parseInt(limit),
      message
    });

    // Get the total count of records for pagination calculation
    const totalCount = await Beatjobs.count();

    // Prepare the response object
    const response = {
      page: parseInt(page),
      limit: parseInt(limit),
      totalCount,
      message,
      data: beats,
    };

    // return res.json(response);
    return res.send(response)
    
});

// router.get('/beatjobs/XYZ', async (req, res) => {
//     var beatjobList = await beatRepo.beatjobsExcludeBeatXYGet();
//     return res.send(beatjobList);
// });

router.post('/beatjobs', async (req, res) =>{
    // console.log(req.body);
    if(req.body)
    {
        var result = await beatRepo.beatjobsCreate(req);
        return res.send(result);
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

router.put('/beatjobs/:id', async (req, res) =>{
    if(req.params.id)
    {
        await beatRepo.beatjobsUpdate(req);
        return res.send({"Status" : "Successfully Updated"});
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

// router.put('/beatjobs', async (req, res) =>{
//     if(req.body)
//     {
//         var result = await beatRepo.beatjobsUpdate(req);
//         return res.send(result);
//     }else
//     {
//         return res.send({"Error" : "Data not found."});
//     }
// })

router.delete('/beatjobs/:userId', async (req, res) => {
    if(req.params.userId)
    {
        await beatRepo.beatjobsDeleteBasedOnUserId(req);
        return res.send({"Status" : "Successfully Deleted"});
    }else
    {
        return res.send({"Error" : "UserId required"});
    }
})

module.exports = router;


// router.get('/beatjobs', async (req, res) => {
//     var beatjobList = await beatRepo.beatjobsExcludeBeatTodo();
//     return res.send(beatjobList);
// });


// router.get('/beatjobs', async (req, res) => {
//     var beatjobList = await Beatjobs.findAll();
//     return res.send(beatjobList);
// });

// router.post('/beatjobs', async (req, res) =>{
//     console.log(req.body);
//     if(req.body)
//     {
//         var result = await Beatjobs.create({
//             // 'id':req.body.id,
//             'userId' : req.body.userId,
//             'beatDate' : req.body.beatDate,
//             'beatTime' : req.body.beatTime,
//             'beatContactPerson' : req.body.beatContactPerson,
//             'beatBusinessName' : req.body.beatBusinessName,
//             'beatPriority' : req.body.beatPriority,
//             'beatPhoneNumber' : req.body.beatPhoneNumber,
//             'beatAddress' : req.body.beatAddress,
//             'beatCity' : req.body.beatCity,
//             'beatState' : req.body.beatState,
//             'beatFollowUp' : req.body.beatFollowUp,
//             'beatXY' : req.body.beatXY,
//             'beatTodo' : req.body.beatTodo,
//             'beatNotes' : req.body.beatNotes,
//             'beatAssigned' : req.body.beatAssigned,
//             'beatDateAndTime' : req.body.beatDateAndTime
//             // createdAt: req.body.createdAt,
//             // updatedAt: req.body.updatedAt
//         });
//         return res.send(result);
//     }else
//     {
//         return res.send({"Error" : "Data not found."});
//     }
// })

// router.put('/beatjobs', async (req, res) =>{
//     if(req.body)
//     {
//         var result = await Beatjobs.update({
//             'userId' : req.body.userId,
//             'beatDate' : req.body.beatDate,
//             'beatTime' : req.body.beatTime,
//             'beatContactPerson' : req.body.beatContactPerson,
//             'beatBusinessName' : req.body.beatBusinessName,
//             'beatPriority' : req.body.beatPriority,
//             'beatPhoneNumber' : req.body.beatPhoneNumber,
//             'beatAddress' : req.body.beatAddress,
//             'beatCity' : req.body.beatCity,
//             'beatState' : req.body.beatState,
//             'beatFollowUp' : req.body.beatFollowUp,
//             'beatXY' : req.body.beatXY,
//             'beatTodo' : req.body.beatTodo,
//             'beatNotes' : req.body.beatNotes,
//             'beatAssigned' : req.body.beatAssigned,
//             'beatDateAndTime' : req.body.beatDateAndTime,
//         }, {
//             where : {
//                 'userId' : req.body.userId
//             }
//         })
//         return res.send(result);
//     }else
//     {
//         return res.send({"Error" : "Data not found."});
//     }
// })

// router.delete('/beatjobs/:userId', async (req, res) => {
//     if(req.params.userId)
//     {
//         await Beatjobs.destroy({
//             where : {
//                 userId : req.params.userId
//             }
//         })
//         return res.send({"Status" : "Successfully Deleted"});
//     }else
//     {
//         return res.send({"Error" : "UserId required"});
//     }
// })

// module.exports = router;