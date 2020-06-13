"use strict";
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        user_group_id: DataTypes.INTEGER,
    }, {
        tableName: "Users",
    });
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};