const express = require('express')
const resource1Router = require('./routers/resource1')
const resource2Router = require('./routers/resource2')

const router = express.Router()

router.use('/resource1', resource1Router)
router.use('/resource2', resource2Router)

module.exports = router