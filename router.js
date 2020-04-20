const express = require('express')
const resource1Router = require('./routers/resource1')

const router = express.Router()

router.use('/', resource1Router)

module.exports = router