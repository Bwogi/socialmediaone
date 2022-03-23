// this handles registering users, adding users, deleting and updating users

const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('User Route...'))

// @route   POST api/users
// @desc    Used to Register User (add Users to the database)
// @access  Public
router.post('/', (req, res) =>{
    //lets check requests sent in the url body
    console.log(req.body);
    res.send('User Route...');
});
module.exports = router