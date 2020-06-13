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
            next();
        }
    });

    // Endpoint ini digunakan untuk login
    router.post("/auth", function (req, res, next) {
        const body = req.body;
        db.User.findOne({ where: { username: body.username } }).then(user => {
            if (user != null) {
                if (crypt.compareSync(body.password, user.password)) {
                    res.json({ message: "success", token: jwt.sign(body, secretKey) });
                    next();
                } else {
                    res.status(401).send({ message: "username or password is invalid" });
                    next();
                }
            } else {
                res.status(401).send({ message: "username or password is invalid" });
                next();
            }
        });
    });

    // Kelompok endpoint untuk manipulasi data user group
    router.group("/user/group", (router) => {
        router.get("/", function (req, res, next) {
            db.UserGroup.findAll().then(usergroup => {
                res.send(usergroup);
                next();
            });
        });
        router.post("/", function (req, res, next) {
            const body = req.body;
            db.UserGroup.create(body).then((usergroup) => {
                res.send({ message: `Success create a user group with name ${ usergroup.name }` });
                next();
            });
        });
        router.put("/:userGroupId", function (req, res, next) {
            const body = req.body;

            db.UserGroup.update(body, {
                where: {
                    id: req.params.userGroupId,
                }
            }).then(() => {
                res.send({ message: `Success edit a user group with name ${ body.name }` });
                next();
            });
        });
        router.delete("/:userGroupId", function (req, res, next) {
            db.UserGroup.findByPk(req.params.userGroupId).then(usergroup => {
                usergroup.destroy();
                res.send({ message: `Success delete a user group with name ${ usergroup.name }` });
                next();
            });
        });
    });

    // Kelompok endpoint untuk manipulasi data user
    router.group("/user", (router) => {
        router.get("/", function (req, res, next) {
            db.User.findAll().then(user => {
                res.send(user);
                next();
            });
        });
        router.post("/", function (req, res, next) {
            const body = req.body;
            db.User.create(body).then((user) => {
                res.send({ message: `Success create a user with name ${ user.name }` });
                next();
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
                res.send({ message: `Success edit a user with name ${ body.name }` });
                next();
            });
        });
        router.delete("/:userId", function (req, res, next) {
            db.User.findByPk(req.params.userId).then(user => {
                user.destroy();
                res.send({ message: `Success delete a user with name ${ user.name }` });
                next();
            });
        });
    });

    // Kelompok endpoint untuk manipulasi data dari tabel task
    router.group("/task", (router) => {
        router.get("/", function (req, res, next) {
            db.Task.findAll().then(task => {
                res.send(task);
                next();
            });
        });
        router.post("/", function (req, res, next) {
            const body = req.body;
            db.Task.create(body).then((task) => {
                res.send({ message: `Success create a task with title ${ task.title }` });
                next();
            });
        });
        router.put("/:taskId", function (req, res, next) {
            const body = req.body;

            db.Task.update(body, {
                where: {
                    id: req.params.taskId,
                }
            }).then(() => {
                res.send({ message: `Success edit a task with title ${ body.title }` });
                next();
            });
        });
        router.delete("/:taskId", function (req, res, next) {
            db.Task.findByPk(req.params.taskId).then(task => {
                task.destroy();
                res.send({ message: `Success delete a task with title ${ task.title }` });
                next();
            });
        });
    });
});

module.exports = router;
