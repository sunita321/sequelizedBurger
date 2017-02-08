var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
  res.redirect('/burger');
});

router.get('/burger', function (req, res) {
  models.burger.findAll({}).then(function (data) {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});

router.post('/burger/create', function (req, res) {
  models.burger.create({burger_name: req.body.burger_name, devoured: req.body.devoured}).then(function() {
    res.redirect('/burger');
  });
});

router.post('/burger/eat/:id', function (req, res) {

  models.burger.update({ devoured: true}, {where: {id:req.params.id}}).then(function () {
    res.redirect('/burger');
  });
});

router.delete('/burger/delete/:id', function (req, res) {

  models.burger.destroy({where: {id:req.params.id}}).then(function() {
    res.redirect('/burger');
  });
});

module.exports = router;