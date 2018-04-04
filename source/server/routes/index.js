var mongoose = require('mongoose');

module.exports = function (app, router) {
    app.use('/instabosch', require('./home.js')(router));
};
