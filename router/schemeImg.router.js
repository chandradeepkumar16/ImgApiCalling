const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {SchemeImg} = require('../models');

const schemeImgRepo = require('../repository/schemeImg.repo');

router.get('/schemeImg', async (req, res) => {
    var schemeImgList = await schemeImgRepo.schemeImgGet();
    return res.send(schemeImgList);
});

// router.get('/users/login', async (req, res) => {
//     var userList = await userRepo.usersLoginGet();
//     return res.send(userList);
// });

// router.put('/users/:userid', async (req, res) =>{
//     if(req.params.userid)
//     {
//         // var result = await userRepo.usersUpdate(req);
//         // return res.send(result);
//         await userRepo.usersUpdate(req);
//         return res.send({"Status" : "Successfully Updated"});
//     }else
//     {
//         return res.send({"Error" : "Data not found."});
//     }
// })

// router.get('/users', async (req, res) => {
//     var userList = await Users.findAll();
//     return res.send(userList);
// })

module.exports = router;