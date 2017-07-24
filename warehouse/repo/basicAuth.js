const user = require('./user');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
'use strict';
mongoose.connect('mongodb://127.0.0.1:27017/warehouse');

function basicAuth(app) {
    function fail(res) {
        res.render('form');
    }
    app.use(session({
        secret: "session secret"
    }));
    app.get('/logOut', (req, res) => {
        req.session.name = null;
        fail(res);
    });
    return function (req, res, next) {
        const auth = req.session.name;
        if (!auth) {
            if (!req.body.initPassword || !req.body.initUserName)
                fail(res);
            else {
                user.findOne({ $and: [{ "userName.name": req.body.initUserName }, { "userName.password": req.body.initPassword }] }, (err, result) => {
                    if (result) {
                        req.session.name = result.name;
                        if (result.perm === 'admin') req.session.perm = true;
                        else req.session.perm = null;
                        res.redirect('http://localhost:8000');
                    } else
                        fail(res);
                });
            }
        } else
            next();
    };
}

module.exports = basicAuth;