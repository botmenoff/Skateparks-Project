const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    // Relaciones
    static associate(models) {
      this.hasMany(models.Skatepark, { foreignKey: 'user_id' });
      User.hasOne(models.VerificationToken, {
        as: 'verificationtoken',
        foreignKey: 'userId',
        foreignKeyConstraint: true,
      });
    }
  }

  User.init({
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    isVerified: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
      sequelize,
      modelName: 'User',
      // Varificar que ni el nombre ni el email sean el mismo
      hooks: {
        beforeValidate: async (user, options) => {
          const existingUserWithEmail = await User.findOne({ where: { email: user.email } });
          const existingUserWithUsername = await User.findOne({ where: { userName: user.userName } });
          if (existingUserWithUsername) {
            throw new Error('Username is already in use');
          }
          if (existingUserWithEmail) {
            throw new Error('Email is already in use');
          }
        }
      }
    });

  return User;
};
