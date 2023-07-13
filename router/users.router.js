const express = require("express");
const router = express.Router();

const sequelize = require('sequelize');

const {Users} = require('../models');

const userRepo = require('../repository/users.repo');

router.get('/users', async (req, res) => {
    var userList = await userRepo.usersGet();
    return res.send(userList);
});

router.get('/users/login', async (req, res) => {
    var userList = await userRepo.usersLoginGet();
    return res.send(userList);
});

router.put('/users/:userid', async (req, res) =>{
    if(req.params.userid)
    {
        // var result = await userRepo.usersUpdate(req);
        // return res.send(result);
        await userRepo.usersUpdate(req);
        return res.send({"Status" : "Successfully Updated"});
    }else
    {
        return res.send({"Error" : "Data not found."});
    }
})

// router.get('/users', async (req, res) => {
//     var userList = await Users.findAll();
//     return res.send(userList);
// })

module.exports = router;