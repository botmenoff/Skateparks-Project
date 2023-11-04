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
      unique: true, // Indica que el userName debe ser único
      allowNull: false, // No permite valores nulos
      validate: {
        isAlphanumeric: true // Puedes añadir otras validaciones según tus necesidades
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true, // Indica que el email debe ser único
      allowNull: false, // No permite valores nulos
      validate: {
        isEmail: true // Valida que sea un formato de correo electrónico válido
      }
    },
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
