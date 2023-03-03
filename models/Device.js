'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Device.init({
    serialNumber: DataTypes.STRING,
    partNumber: DataTypes.STRING,
    acquirerID: DataTypes.INTEGER,
    connectionID: DataTypes.INTEGER,
    locationID: DataTypes.INTEGER,
    modelID: DataTypes.INTEGER,
    statusID: DataTypes.INTEGER,
    remarks: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Device',
    tableName: 'device'
  });
  return Device;
};