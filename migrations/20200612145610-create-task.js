'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Tasks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            progress: {
                type: Sequelize.INTEGER
            },
            date_time: {
                type: Sequelize.DATE
            },
            created_by: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updateAt: {
                type: Sequelize.DATE
            }
        }).then(() => queryInterface.addConstraint('Tasks', ['created_by'], {
            type: 'foreign key',
            name: 'const_fkey_task_and_user',
            references: {
                table: 'Users',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        }));
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Tasks');
    }
};