const { UsageData } = require('../models');

// exports.clockdataGet = () => {
//     return ClockingData.findAll({
        
//     });
// }

exports.usagedataCreate = (req) => {
    return UsageData.create({
        userid : req.body.userid,
        usageduration : req.body.usageduration,
        usagedate : req.body.usagedate,
        usagetime : req.body.usagetime
    });
}