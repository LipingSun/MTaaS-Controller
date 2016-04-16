'use strict';

var router = require('express').Router();
var Joi = require('joi');
var Model = require('./../models/Model');

router.get('/', function (req, res, next) {
    Model.scan().loadAll().exec(function (err, data) {
        if (err) {
            console.log("Scan models err: " + err);
            res.status(500).send();
        } else {
            res.status(200).send(data.Items);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Model.get(req.params.id, function (err, data) {
        if (err) {
            console.log("Get model err: " + err);
            res.status(500).send();
        } else {
            res.status(200).send(data);
        }
    });
});

router.post('/', function (req, res, next) {
    var model = new Model(req.body);
    model.save(function (err) {
        if (err) {
            console.log('create model err: ' + err);
            res.status(500).send()
        } else {
            res.status(201).send();
        }
    });
});

router.post('/:id', function (req, res, next) {
    req.body.id = req.params.id;
    Model.update(req.body, function (err, data) {
        if (err) {
            console.log('update model err: ' + err);
            res.status(500).send();
        } else {
            res.status(200).send(data);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Model.destroy(req.params.id, function (err) {
        if (err) {
            console.log('delete model err: ' + err);
            res.status(500).send();
        } else {
            res.status(200).send();
        }
    });
});

module.exports = router;