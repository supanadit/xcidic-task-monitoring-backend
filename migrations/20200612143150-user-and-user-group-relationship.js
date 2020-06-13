"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn("Users", "user_group_id", Sequelize.INTEGER).then(() => queryInterface.addConstraint("Users", [ "user_group_id" ], {
            type: "foreign key",
            name: "const_fkey_user_and_user_group",
            references: {
                table: "UserGroups",
                field: "id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        }));
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn("Users", "user_group_id");
    }
};
