var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('sign-in', { title: 'Sign in', nav: 'sign-in' });
});

module.exports = router;