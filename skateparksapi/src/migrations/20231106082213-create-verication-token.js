'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the VerificationTokens table
    await queryInterface.createTable('VerificationTokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
        references: { model: "Users", key: "id" }
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Create the expireToken event
    await queryInterface.sequelize.query(`
      CREATE EVENT expireToken
      ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL  1 DAY 
      DO
      DELETE FROM verification_tokens WHERE createdAt < DATE_SUB(NOW(), INTERVAL 1 DAY);
    `);

    console.log('Created VerificationTokens table and expireToken event');
  },
  async down(queryInterface) {
    // Drop the VerificationTokens table
    await queryInterface.dropTable('VerificationTokens');

    // Drop the expireToken event
    await queryInterface.sequelize.query(`DROP EVENT IF EXISTS expireToken`);

    console.log('Dropped VerificationTokens table and expireToken event');
  }
};
