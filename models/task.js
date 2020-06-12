'use strict';
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        progress: DataTypes.INTEGER,
        date_time: DataTypes.DATE,
        created_by: DataTypes.INTEGER
    }, {
        tableName: 'Tasks',
    });
    Task.associate = function (models) {
        // associations can be defined here
    };
    return Task;
};