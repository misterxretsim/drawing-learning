const post = require('./routing/post');
const get = require('./routing/get');

module.exports = (app, db) => {
    post(app, db);
    get(app, db);
};