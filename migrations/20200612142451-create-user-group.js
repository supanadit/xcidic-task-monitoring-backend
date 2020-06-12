'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('UserGroups', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            can_create_task: {
                type: Sequelize.BOOLEAN
            },
            can_edit_task: {
                type: Sequelize.BOOLEAN
            },
            can_delete_task: {
                type: Sequelize.BOOLEAN
            },
            can_view_anyone_task: {
                type: Sequelize.BOOLEAN
            },
            can_create_user_group: {
                type: Sequelize.BOOLEAN
            },
            can_edit_user_group: {
                type: Sequelize.BOOLEAN
            },
            can_delete_user_group: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('UserGroups');
    }
};