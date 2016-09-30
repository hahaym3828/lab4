/**
 * Created by peter on 2016-09-30.
 */

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    // res.send('respond with a resource');

    res.render('Peter', {
        title:'Peter',

    });
});

module.exports = router;
/*
var express = require('express');
var router = express.Router();

//GET home page.
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Family' });
});

module.exports = router;
    */