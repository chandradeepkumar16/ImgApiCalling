const { ClockingData } = require('../models');

// exports.clockdataGet = () => {
//     return ClockingData.findAll({
        
//     });
// }

exports.clockdataCreate = (req) => {
    return ClockingData.create({
        userid:req.body.userid,
        activitytype:req.body.activitytype,
        clockdate:req.body.clockdate,
        clocktime:req.body.clocktime
    });
}