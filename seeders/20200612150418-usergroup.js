"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("UserGroups", [
            {
                name: "Manager",
                can_create_task: true,
                can_edit_task: true,
                can_delete_task: true,
                can_view_anyone_task: true,
                can_create_user_group: true,
                can_edit_user_group: true,
                can_delete_user_group: true,
            },
            {
                name: "Employee",
                can_create_task: true,
                can_edit_task: true,
                can_delete_task: true,
                can_view_anyone_task: false,
                can_create_user_group: false,
                can_edit_user_group: false,
                can_delete_user_group: false,
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("UserGroups", null, {});
    }
};
