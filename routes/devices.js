'use strict';

var router = require('express').Router();
var Device = require('./../models/Device');

router.get('/', function (req, res, next) {
    Device.scan().loadAll().exec(function (err, data) {
        if (err) {
            console.log("Scan devices err: " + err);
            res.status(500).send();
        } else {
            res.status(200).send(data.Items);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Device.get(req.params.id, function (err, data) {
        if (err) {
            console.log("Get device err: " + err);
            res.status(500).send();
        } else {
            res.status(200).send(data);
        }
    });
});

router.post('/', function (req, res, next) {
    var device = new Device(req.body);
    device.save(function (err) {
        if (err) {
            console.log('create device err: ' + err);
            res.status(500).send()
        } else {
            res.status(201).send();
        }
    });
});

router.post('/:id', function (req, res, next) {
    req.body.id = req.params.id;
    Device.update(req.body, function (err, data) {
        if (err) {
            console.log('update device err: ' + err);
            res.status(500).send();
        } else {
            res.status(200).send(data);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Device.destroy(req.params.id, function (err) {
        if (err) {
            console.log('delete device err: ' + err);
            res.status(500).send();
        } else {
            res.status(200).send();
        }
    });
});

module.exports = router;