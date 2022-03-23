// this will handle fetching webtokens for authentication purposes
const express = require('express')
const router = express.Router()

// @route GET /api/auth
// @desc Test route
// @access Public
router.get('/', (req,res)=> res.send('Auth route...'))

module.exports = router;
