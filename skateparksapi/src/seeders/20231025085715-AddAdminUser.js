'use strict';

const bcrypt = require('bcrypt');
require('dotenv').config();

const saltRounds = 10;
const plainPassword = process.env.ADMIN_PASSWORD;
module.exports = {

  async up(queryInterface, Sequelize) {
    // We have to hash the password here because of the async problem with bcrypt
    console.log(plainPassword);

    // Check if the password is empty
    if (plainPassword === undefined) {
      console.error('Error: Admin password is empty');
      process.exit(1);
    }

    // Make the hash of the password  
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    // Make the insert of the admin user
    return queryInterface.bulkInsert('Users', [{
      userName: 'Admin',
      email: 'botmenSs@proton.me',
      password: hashedPassword,
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  // This is the down function, it will be executed when the migration is rolled back
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', { userName: 'admin' }, {});
  }
};
