const post = require('./routing/post');
const get = require('./routing/get');
module.exports = function(app, db) {
    post(app, db);
    get(app, db);
};