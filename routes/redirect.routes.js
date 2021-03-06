const { Router } = require('express')
const Link = require('../models/Link.js')
const router = Router()

router.get('/:code', async (req, res) => {
    try {
        const link = await Link.findOne({ code: req.params.code })
        if (link) {
            link.clicks++
            await link.save()
            return res.redirect(link.from)
        }
        res.status(404).json("Links didn't find")
    } catch (e) {
        res.status(500).json({ message: 'Something is not right, try again' })
    }
})

module.exports = router