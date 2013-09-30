var npm = require('npm');
var os = require('os');
var path = require('path');
var fs = require('fs');
var rimraf = require('rimraf');

exports.install = function (options) {
    var prefix = path.join(os.tmpdir(), 'tipi');

    try {
        fs.mkdirSync(tmpdir)
    } catch(e) {
    }

    npm.load({prefix: prefix, loglevel: 'error'}, function () {
        npm.commands.install(['underscore'], function (error, data) {
            rimraf.sync(prefix);
        });

    });

};