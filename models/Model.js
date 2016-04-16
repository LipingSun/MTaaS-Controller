'use strict';

var vogels = require("./../services/vogels");
var Joi = require('joi');

var Model = vogels.define('model', {
    hashKey: 'id',
    timestamps: true,
    schema: {
        id: Joi.string(),
        additionalFeatures: Joi.string(),
        android: {
            os: Joi.string(),
            ui: Joi.string()
        },
        availability: vogels.types.stringSet(),
        battery: {
            standbyTime: Joi.string(),
            talkTime: Joi.string(),
            type: Joi.string()
        },
        camera: {
            features: vogels.types.stringSet(),
            primary: Joi.string()
        },
        connectivity: {
            bluetooth: Joi.string(),
            cell: Joi.string(),
            gps: Joi.boolean(),
            infrared: Joi.boolean(),
            wifi: Joi.string()
        },
        description: Joi.string(),
        display: {
            screenResolution: Joi.string(),
            screenSize: Joi.string(),
            touchScreen: Joi.boolean()
        },
        hardware: {
            accelerometer: Joi.boolean(),
            audioJack: Joi.string(),
            cpu: Joi.string(),
            fmRadio: Joi.boolean(),
            physicalKeyboard: Joi.boolean(),
            usb: Joi.string()
        },
        images: vogels.types.stringSet(),
        name: Joi.string(),
        sizeAndWeight: {
            dimensions: vogels.types.stringSet(),
            weight: Joi.string()
        },
        storage: {
            flash: Joi.string(),
            ram: Joi.string()
        }
    }
});



Model.updateTable(function (err) {
    if (err) {
        console.log('Error updating Model table');
        vogels.createTables(function(err) {
            if (err) {
                console.log('Error creating Model table');
            } else {
                console.log('Model table has been created');
            }
        });
    } else {
        console.log('Model table has been updated');
    }
});

module.exports = Model;