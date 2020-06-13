// For API Purpose
const express = require("express");
require("express-group-routes");
const db = require("../models/index");

const router = express.Router();
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");
const crypt = require("bcrypt");

// Bisa di ganti secret key nya jika diperlukan
const secretKey = "very-secret-project";

router.group("/", (router) => {
    router.use(expressJWT({
        secret: secretKey,
        credentialsRequired: true,
    }).unless({
        path: [ "/api/v1/auth" ],
    }), function (err, req, res, next) {
        if (err.name === "UnauthorizedError") {
            res.status(401).send({ message: "Unauthorized" });
        }
    });

    // Endpoint ini digunakan untuk login
    router.post("/auth", function (req, res, next) {
        const body = req.body;
        db.User.findOne({ where: { username: body.username } }).then(user => {
            if (user != null) {
                if (crypt.compareSync(body.password, user.password)) {
                    res.json({ message: "success", token: jwt.sign(body, secretKey) });
                } else {
                    res.status(401).send({ message: "username or password is invalid" });
                }
            } else {
                res.status(401).send({ message: "username or password is invalid" });
            }
        });
    });

    // Kelompok endpoint untuk manipulasi data user group
    router.group("/user/group", (router) => {
        router.get("/", function (req, res, next) {
            db.UserGroup.findAll().then(usergroup => {
                return res.send(usergroup);
            });
        });
        router.post("/", function (req, res, next) {
            const body = req.body;
            db.UserGroup.create(body).then((usergroup) => {
                return res.send({ message: `Success create a user group with name ${ usergroup.name }` });
            });
        });
        router.put("/:userGroupId", function (req, res, next) {
            const body = req.body;

            db.UserGroup.update(body, {
                where: {
                    id: req.params.userGroupId,
                }
            }).then(() => {
                return res.send({ message: `Success edit a user group with name ${ body.name }` });
            });
        });
        router.delete("/:userGroupId", function (req, res, next) {
            db.UserGroup.findByPk(req.params.userGroupId).then(usergroup => {
                usergroup.destroy();
                return res.send({ message: `Success delete a user group with name ${ usergroup.name }` });
            });
        });
    });

    // Kelompok endpoint untuk manipulasi data user
    router.group("/user", (router) => {
        router.get("/", function (req, res, next) {
            db.User.findAll().then(user => {
                return res.send(user);
            });
        });
        router.post("/", function (req, res, next) {
            const body = req.body;
            db.User.create(body).then((user) => {
                return res.send({ message: `Success create a user with name ${ user.name }` });
            });
        });
        router.put("/:userId", function (req, res, next) {
            const body = req.body;
            body.password = crypt.hashSync(body.password, crypt.genSaltSync(10));

            db.User.update(body, {
                where: {
                    id: req.params.userId,
                }
            }).then(() => {
                return res.send({ message: `Success edit a user with name ${ body.name }` });
            });
        });
        router.delete("/:userId", function (req, res, next) {
            db.User.findByPk(req.params.userId).then(user => {
                user.destroy();
                return res.send({ message: `Success delete a user with name ${ user.name }` });
            });
        });
    });
});

module.exports = router;
