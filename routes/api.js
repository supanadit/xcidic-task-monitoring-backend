// For API Purpose
const express = require('express');
require('express-group-routes');
const db = require('../models/index');

const router = express.Router();
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const bcrypt = require('bcrypt');

// Bisa di ganti secret key nya jika diperlukan
const secretKey = 'very-secret-project';

router.group("/", (router) => {
    router.use(expressJWT({
        secret: secretKey,
        credentialsRequired: true,
    }).unless({
        path: ['/api/v1/auth'],
    }), function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            res.status(401).send({message: "Unauthorized"});
        }
    });
    router.post('/auth', function (req, res, next) {
        const body = req.body;
        db.User.findOne({where: {username: body.username}}).then(user => {
            if (user != null) {
                if (bcrypt.compareSync(body.password, user.password)) {
                    res.json({message: "success", token: jwt.sign(body, secretKey)});
                } else {
                    res.status(401).send({message: "username or password is invalid"})
                }
            } else {
                res.status(401).send({message: "username or password is invalid"})
            }
        })
    });
});

module.exports = router;
