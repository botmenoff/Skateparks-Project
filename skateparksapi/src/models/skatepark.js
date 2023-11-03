'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skatepark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'user_id' }); // Relacion 1:N
    }
  }
  Skatepark.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    location: DataTypes.STRING,
    type: DataTypes.ENUM,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Skatepark',
  });
  return Skatepark;
};