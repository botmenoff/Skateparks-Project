'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Skateparks extends Model {
      // RELACIONES
      static associate(models) {
        // FUTURAS RELACIONES
      }
    }
  
    Skateparks.init(
      {
        // Nombre
        name: {
          type: DataTypes.STRING,
          unique: false,
          allowNull: false,
          validate: {
            isAlphanumeric: true,
          },
        },
        // Ubicacion
        ubication: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        // Likes
        // Views
        // Clips (Otra Tabla)
        // Fotos del Skatepark (Otra Tabla)
        // Comentarios (Otra Tabla)
        // Features (Otra Tabla)

      },
      {
        sequelize,
        modelName: 'User',
      }
    );
  
    return User;
  };