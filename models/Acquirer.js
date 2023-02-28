'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acquirer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Acquirer.hasMany(models.Device, {
        foreignKey: 'acquirerID'
      })
    }
  }
  Acquirer.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Acquirer',
  });
  return Acquirer;
};