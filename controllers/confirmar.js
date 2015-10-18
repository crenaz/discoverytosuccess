var express = require('express');
var router = require('express').Router();
var path = require('path');

router.use(express.static(__dirname + '/../assets'));

router.get('/confirmar', function (req, res) {
    res.sendFile('confirmar.html', { root: path.join(__dirname, '../views') });
});

module.exports = router;
