'use strict';
require('dotenv').config(); // Load environment variables from .env file
const bcrypt = require('bcrypt');
const plainPassword = process.env.ADMIN_PASSWORD;
let hashedPassword;

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    // Store hash in your password DB.
    hashedPassword = hash;
    console.log('Hashed Password:', hashedPassword);
  }
});

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      userName: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', { userName: 'admin' }, {});
  }
};