const router = require('express').Router()
const Photos = require('../db/photosModel')

// Get ALL Routes

router.get('/', async (req, res, next) => {
    try {
        const photos = await Photos.findAll()
        res.send('hi')
    } catch (err) {
        next(err)
    }
})


module.exports = router