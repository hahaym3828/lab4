/**
 * Created by peter on 2016-09-30.
 */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    // res.send('respond with a resource');

    res.render('Tony', {
        title:'Tony',

    });
});

module.exports = router;