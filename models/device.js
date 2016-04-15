'use strict';

var vogels = require("./../services/vogels");
var Joi = require('joi');

var Device = vogels.define('device', {
    hashKey: 'id',
    timestamps: true,
    schema: {
        id: vogels.types.uuid(),
        provider_id: Joi.string(),
        brand: Joi.string(),
        model: Joi.string()
    }
});

Device.updateTable(function (err) {
    if (err) {
        console.log('Error updating Device table');
        vogels.createTables(function(err) {
            if (err) {
                console.log('Error creating Device table');
            } else {
                console.log('Device table has been created');
            }
        });
    } else {
        console.log('Device table has been updated');
    }
});

module.exports = Device;