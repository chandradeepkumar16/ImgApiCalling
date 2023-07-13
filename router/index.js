const express = require("express");
const router = express.Router();

const userRouter = require('./users.router')
const leadRouter = require('./leads.router')
const beatjobRouter = require('./beatjobs.router')
const locationdataRouter = require('./locationdata.router')
const beatjobTransRouter = require('./beatjobsTransaction.router')
const clockingRouter = require('./clockingdata.router')
const mediaRouter = require('./media.router')
const usageRouter = require('./usagedata.router')
const schemeImgRouter = require('./schemeImg.router')
const productsRouter = require('./products.router')
const salesdataRouter = require('./salesdata.router')
const brainRouter = require('./brains.router')
const negotiatorRouter = require('./negotiators.router')
const adsmediaRouter = require('./adsmedia.router')
const schemeRouter = require('./schemes.router')
const notification = require('./notification.router')
const notificationStatusTracker = require('./notificationstatustracker.router')
const invoicemedia = require('./invoicemedia.router')
const consignment = require('./consignment.router')
const consignmentTransaction = require('./consignmentTransaction.router')
// const test = require('./test.router')

router.use(userRouter);
router.use(leadRouter);
router.use(beatjobRouter);
router.use(locationdataRouter);
router.use(beatjobTransRouter);
router.use(clockingRouter);
router.use(mediaRouter)
router.use(usageRouter)
router.use(schemeImgRouter)
router.use(productsRouter)
router.use(salesdataRouter)
router.use(brainRouter)
router.use(negotiatorRouter)
router.use(adsmediaRouter)
router.use(schemeRouter)
router.use(notification)
router.use(notificationStatusTracker)
router.use(invoicemedia)
router.use(consignment)
router.use(consignmentTransaction)
// router.use(test)


module.exports = router