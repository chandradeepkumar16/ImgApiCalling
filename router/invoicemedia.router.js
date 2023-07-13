const express = require('express')
const router = express.Router()
const { InvoiceMedia } = require('../models')
const { Negotiator } = require('../models');

const { v4 : uuidv4 } = require('uuid')
const multer = require('multer')
const sharp = require('sharp')
const fs = require('fs')

const storage = multer.memoryStorage()

const upload = multer({
    storage : storage,
    fileFilter: function(req, file, cb){
        if(file.mimetype == 'application/pdf')
        {
            cb(null, true)
        }else
        {
            cb(null,false)
            cb(new Error('not allow this file'))
        }
    }
})

router.get('/invoice', async (req, res, next) => {
    var invoiceList = await InvoiceMedia.findAll({
        // include: [
        //     {model : Users, as: 'Users'}
        // ]
    });
    return res.send(invoiceList);
})

router.post('/invoice', upload.single('pdfFile'), async function(req, res, next) {
    let user_id = req.body.userid
    let file = req.file
    let uuid = uuidv4()
    let id = req.body.id

    let destination = "uploads/" + uuid
    let pic = destination + "/invoice.pdf"

    fs.mkdir(__basedir + "/" + destination, {}, (err) => {
        console.log(__basedir)
        if(err)
        {
            console.log(err)
        }else{
            console.log('folder created')
        }
    })
    
    fs.writeFile(__basedir + "/" + pic, file.buffer, (err) => {
        if(err)
        {
            console.log(err)
        }else{
            console.log('folder created')
        }
    })

    InvoiceMedia.create({
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

    Negotiator.update({
        invoicelink: pic,
    }, {
        where : {
            'id' : id
        }
    });
})

module.exports = router