const router = require('express').Router()

module.exports = router

router.use('/photos', require('./photos'))