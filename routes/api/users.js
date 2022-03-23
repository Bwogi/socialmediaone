// this handles registering users, adding users, deleting and updating users

const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator')


// @route   GET api/users
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('User Route...'))


// @route   POST api/users
// @desc    Used to Register User (add Users to the database)
// @access  Public
router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email','Please enter a valid email address').isEmail(),
    check('password','Please enter the password of 6 or more characters').isLength({min:6})
], (req, res) =>{
    // We then check for validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()}); // bad request
    }


    //lets check requests sent in the url body
    console.log(req.body);
    res.send('User Route...');
});
module.exports = router