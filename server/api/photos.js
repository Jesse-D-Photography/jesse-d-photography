const router = require('express').router()

// Get ALL Routes

router.get('/', async (req, res, next) => {
    try {
        const photos = await Photos.findAll()
        res.json(photos)
    } catch (err) {
        next(err)
    }
})


