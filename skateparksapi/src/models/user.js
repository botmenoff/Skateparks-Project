const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Skatepark, { foreignKey: 'user_id' }); 
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
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeValidate: async (user, options) => {
        const existingUserWithEmail = await User.findOne({ where: { email: user.email } });
        const existingUserWithUsername = await User.findOne({ where: { userName: user.userName } });
        
        if (existingUserWithEmail) {
          throw new Error('Email is already in use');
        }

        if (existingUserWithUsername) {
          throw new Error('Username is already in use');
        }
      }
    }
  });

  return User;
};
