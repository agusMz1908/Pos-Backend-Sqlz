'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modelo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Modelo.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Modelo',
    tableName: 'modelo'
  });
  return Modelo;
};