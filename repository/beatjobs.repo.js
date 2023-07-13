const { Beatjobs } = require('../models');

// const offset = (1 - 1) * 5

exports.beatjobsGet = () => {
    return Beatjobs.findAll({
        // limit : 5,
        // offset
        
    });
}

// exports.beatjobsExcludeBeatTodoGet = () => {
//     return Beatjobs.findAll({
//         attributes: { exclude: ['beatTodo']}
//     });
// }

// exports.beatjobsExcludeBeatXYGet = () => {
//     return Beatjobs.findAll({
//         attributes: { exclude: ['beatXY']}
//     });
// }

exports.beatjobsCreate = (req) => {
    return Beatjobs.create({
        
        'userId' : req.body.userId,
        'beatDate' : req.body.beatDate,
        'beatTime' : req.body.beatTime,
        'beatContactPerson' : req.body.beatContactPerson,
        'beatBusinessName' : req.body.beatBusinessName,
        'beatPriority' : req.body.beatPriority,
        'beatPhoneNumber' : req.body.beatPhoneNumber,
        'beatAddress' : req.body.beatAddress,
        'beatCity' : req.body.beatCity,
        'beatState' : req.body.beatState,
        'beatFollowUp' : req.body.beatFollowUp,
        'beatXY' : req.body.beatXY,
        'beatTodo' : req.body.beatTodo,
        'beatNotes' : req.body.beatNotes,
        'beatAssigned' : req.body.beatAssigned,
        'beatDateAndTime' : req.body.beatDateAndTime,
        'beatlastaction': req.body.beatlastaction
    });
}

exports.beatjobsUpdate = (req) => {
    return Beatjobs.update({
        // 'userId' : req.body.userId,
        // 'beatDate' : req.body.beatDate,
        // 'beatTime' : req.body.beatTime,
        // 'beatContactPerson' : req.body.beatContactPerson,
        // 'beatBusinessName' : req.body.beatBusinessName,
        'beatPriority' : req.body.beatPriority,
        // 'beatPhoneNumber' : req.body.beatPhoneNumber,
        // 'beatAddress' : req.body.beatAddress,
        // 'beatCity' : req.body.beatCity,
        // 'beatState' : req.body.beatState,
        'beatFollowUp' : req.body.beatFollowUp,
        'beatXY' : req.body.beatXY,
        'beatTodo' : req.body.beatTodo,
        'beatNotes' : req.body.beatNotes,
        // 'beatAssigned' : req.body.beatAssigned,
        // 'beatDateAndTime' : req.body.beatDateAndTime
        'beatlastaction': req.body.beatlastaction
    }, {
        where : {
            'id' : req.params.id
        }
    });
}

exports.beatjobsDeleteBasedOnUserId = (req) => {
    return Beatjobs.destroy({
        where : {
            userId : req.params.userId
        }
    })
}