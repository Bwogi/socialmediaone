// we will have a little form area where we can add posts, like, comment things like that.
const express = require('express')
const router = express.Router()

// @route GET api/posts
// @desc Test route
// @access Public
router.get('/',(req,res)=>res.send('Posts route...'))

module.exports = router;