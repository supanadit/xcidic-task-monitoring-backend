'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserGroup = sequelize.define('UserGroup', {
        name: DataTypes.STRING,
        can_create_task: DataTypes.BOOLEAN,
        can_edit_task: DataTypes.BOOLEAN,
        can_delete_task: DataTypes.BOOLEAN,
        can_view_anyone_task: DataTypes.BOOLEAN,
        can_create_user_group: DataTypes.BOOLEAN,
        can_edit_user_group: DataTypes.BOOLEAN,
        can_delete_user_group: DataTypes.BOOLEAN
    }, {
        tableName: 'UserGroups',
    });
    UserGroup.associate = function (models) {
        // associations can be defined here
    };
    return UserGroup;
};