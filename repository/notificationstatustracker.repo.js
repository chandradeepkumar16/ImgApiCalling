const { NotificationStatusTracking } = require('../models');

exports.notificationstatustrackerGet = () => {
    return NotificationStatusTracking.findAll({

    });
}

exports.notificationstatustrackerCreate = (req) => {
    return NotificationStatusTracking.create({
        
        'userid' : req.body.userid,
        'notificationid' : req.body.notificationid,
        'clicked' : req.body.clicked,
        'seen' : req.body.seen
    });
}

exports.notificationstatustrackerUpdate = (req) => {
    return NotificationStatusTracking.update({
        'clicked' : req.body.clicked,
        'seen' : req.body.seen
    }, {
        where : {
            'userid' : req.params.userid
        }
    });
}