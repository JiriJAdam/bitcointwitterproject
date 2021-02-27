const router = require('express').Router()
const User = require('../models/User')


router.route('/register')
    .get((req, res) => {
        res.send('Bitcoin Twitter Welcomes You')
    })

module.exports = router