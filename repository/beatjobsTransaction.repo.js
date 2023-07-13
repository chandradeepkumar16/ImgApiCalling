const { BeatjobsTransactions } = require('../models');

exports.beatjobsTransactionGet = () => {
    return BeatjobsTransactions.findAll({
        
    });
}

exports.beatjobsTransactionCreate = (req) => {
    return BeatjobsTransactions.create({
        
        'userId' : req.body.userId,
        'beatPriority' : req.body.beatPriority,
        'beatFollowUp' : req.body.beatFollowUp,
        'beatTodo' : req.body.beatTodo,
        'beatNotes' : req.body.beatNotes,
        'beatId': req.body.beatId,
        'beatXY' : req.body.beatXY,
        'beatlastaction': req.body.beatlastaction
    });
}