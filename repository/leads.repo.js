const {Leads} = require('../models');

exports.leadsGet = () => {
    return Leads.findAll({
        
    });
}



exports.leadsCreate = (req) => {
    return Leads.create({
        leadCategory : req.body.leadCategory,
        leadEmail: req.body.leadEmail,
        leadPhoneNumber: req.body.leadPhoneNumber,
        leadBusinessName: req.body.leadBusinessName,
        leadContactPerson: req.body.leadContactPerson,
        leadDesignation: req.body.leadDesignation,
        leadAddress: req.body.leadAddress,
        leadCity: req.body.leadCity,
        leadState: req.body.leadState,
        leadPincode: req.body.leadPincode,
        leadNotes: req.body.leadNotes,
        leadSubmitDate: req.body.leadSubmitDate,
        leadSubmitTime: req.body.leadSubmitTime,
        leadsBy: req.body.leadsBy,
        leadOwner: req.body.leadOwner
    });
}

exports.leadsUpdate = (req) => {
    return Leads.update({
        leadCategory : req.body.leadCategory,
        leadPhoneNumber: req.body.leadPhoneNumber,
        leadNotes: req.body.leadNotes
    }, {
        where : {
            'id' : req.params.id
        }
    });
}

exports.leadsDeleteBasedOnPhoneNumber = (req) => {
    return Leads.destroy({
        where : {
            leadPhoneNumber : req.params.leadPhoneNumber
        }
    })
}