'use strict';

const { sequelize } = require('../models');
const { posts } = require('../fixtures/posts');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', posts, {
      truncate: true,
      cascade: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART WITH 1');
    await queryInterface.bulkDelete('Posts', null, {
      truncate: true,
      cascade: true,
    });
  },
};
