const { Brain } = require('../models');

exports.brainsGet = () => {
    return Brain.findAll({
        
    });
}

exports.brainsCreate = (req) => {
    return Brain.create({
        
        userid: req.body.userid,
        personname: req.body.personname,
        businessname: req.body.businessname,
        phonenumber: req.body.phonenumber,
        emailaddress: req.body.emailaddress,
        facebookid: req.body.facebookid,
        instagramid: req.body.instagramid,
        twitterid: req.body.twitterid,
        linkedinid: req.body.linkedinid,
        otherid: req.body.otherid,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        ledbulbs: req.body.ledbulbs,
        highwattagehammerbulbs: req.body.highwattagehammerbulbs,
        panellights: req.body.panellights,
        emergencyinverterbulbs: req.body.emergencyinverterbulbs,
        streetandfloodlights: req.body.streetandfloodlights,
        smartlightning: req.body.smartlightning,
        solarproducts: req.body.solarproducts,
        specialproducts: req.body.specialproducts,
        electricalaccessories: req.body.electricalaccessories
    });
}