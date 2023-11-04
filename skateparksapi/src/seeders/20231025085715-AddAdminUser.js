'use strict';

const bcrypt = require('bcrypt');
require('dotenv').config();

const saltRounds = 10;
const plainPassword = process.env.ADMIN_PASSWORD;
module.exports = {

  async up(queryInterface, Sequelize) {
    // Tenemos que hacer el hash de la contraseña aquí por el problema async con bcrypt
    console.log(plainPassword);

    // Comprobar si la contraseña está vacía
    if (plainPassword === undefined) {
      console.error('Error: Admin password is empty');
      process.exit(1);
    }

    // Hacer el hash de la contraseña  
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    // Hacer la inserción del usuario administrador
    return queryInterface.bulkInsert('Users', [{
      userName: 'Admin',
      email: 'botmenSs@proton.me',
      password: hashedPassword,
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  // Esta es la función down, se ejecutará cuando se revierta la migración
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', { userName: 'admin' }, {});
  }
};
