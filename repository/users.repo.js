const { Users } = require('../models');

exports.usersGet = () => {
    return Users.findAll({
        
    });
}

// exports.usersLoginGet = () => {
//     return Users.findAll({
//         attributes: ['userid', 'useremail', 'userpwd', 'fname', 'lname', 'usertarget', 'userpic', 'userstate']
//     });
// }

exports.usersUpdate = (req) => {
    return Users.update({
        userpwd:req.body.userpwd,
        userid:req.body.userid
    }, {
        where : {
            'userid' : req.params.userid
        }
    });
}