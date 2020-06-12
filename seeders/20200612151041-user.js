'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    up: (queryInterface, Sequelize) => {
        let users = [{
            name: 'simon',
            username: 'simon',
            password: null,
            user_group_id: 1,
        }, {
            name: 'michael',
            username: 'michael',
            password: null,
            user_group_id: 2,
        }];
        for (let x of users) {
            x.password = bcrypt.hashSync("123", bcrypt.genSaltSync(10));
        }
        return queryInterface.bulkInsert('Users', users, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
