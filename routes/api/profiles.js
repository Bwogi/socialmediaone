// this will have routes to do with profiles, fetching them, adding them, updating them
const express = require('express')
const router = express.Router()

// @route GET /api/profile
// @desc Test route
// @access Public
router.get('/',(req, res) => res.send('Profiles route...'))

module.exports = router;