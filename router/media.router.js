const express = require('express')
const router = express.Router()
const { Media } = require('../models')
const { Users } = require('../models');

const { v4 : uuidv4 } = require('uuid')
const multer = require('multer')
const sharp = require('sharp')
const fs = require('fs')
const storage = multer.memoryStorage()

const upload = multer({
    storage : storage,
    fileFilter: function(req, file, cb){
        if(file.mimetype == 'image/png' 
        || file.mimetype === 'image/jpg'
        || file.mimetype == 'image/jpeg'
        || file.mimetype == 'image/webp')
        {
            cb(null, true)
        }else
        {
            cb(null,false)
            cb(new Error('not allow this file'))
        }
    }
})

router.get('/profile', async (req, res, next) => {
    var mediaList = await Media.findAll({
        // include: [
        //     {model : Users, as: 'Users'}
        // ]
    });
    return res.send(mediaList);
})

router.post('/profile', upload.single('avatar'), async function(req, res, next) {
    let user_id = req.body.userid
    let file = req.file
    // let body = req.body
    let uuid = uuidv4()

    let destination = "uploads/" + uuid

    fs.mkdir(__basedir + "/" + destination, {}, (err) => {
        console.log(__basedir)
        if(err)
        {
            console.log(err)
        }else{
            console.log('folder created')
        }
    })

    let pic = destination + "/pic.webp"

    await sharp(file.buffer)
    .resize(200)
    .toBuffer()
    .then( data => {
        fs.writeFile(__basedir + "/" + pic, data, (err) => {
            if(err)
            {
                console.log(err)
            }else{
                console.log('folder created')
            }
        })
    })
    .catch(err => {console.log(err)})

    Media.create({
        uuid : uuid,
        path : pic,
        name : file.originalname,
        mime_type : file.mimetype,
        userid : user_id
    }).then(data => {
        return res.json(data)
    }).catch(err => {
        console.log(err)
        return res.status(400).json({message : err})
    })

    Users.update({
        userpic: pic,
    }, {
        where : {
            'userid' : user_id
        }
    });
})

module.exports = router