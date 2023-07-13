const { Notifications } = require('../models');

exports.notificationsGet = () => {
    return Notifications.findAll({
        
    });
}

exports.notificationsCreate = (req) => {
    return Notifications.create({
        'userid': req.body.userid,
        'title' : req.body.title,
        'description' : req.body.description,
        'imagelink' : req.body.imagelink,
        'state' : req.body.state,
        'markAsReadClicked' : req.body.markAsReadClicked,
        'taskDoneClicked' : req.body.taskDoneClicked,
    });
}


exports.notificationsUpdate = (req) => {
    return Notifications.update({
        'markAsReadClicked' : req.body.markAsReadClicked,
        'taskDoneClicked' : req.body.taskDoneClicked
    }, {
        where : {
            'id' : req.params.id
        }
    });

}