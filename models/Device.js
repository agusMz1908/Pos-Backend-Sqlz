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
      Device.belongsTo(models.Acquirer, {
        foreignKey: 'id',
        targetKey: 'acquirerID'
      })
      Device.belongsTo(models.Connection, {
        foreignKey: 'id',
        targetKey: 'connectionID'
      })
      Device.belongsTo(models.Location, {
        foreignKey: 'id',
        targetKey: 'locationID'
      })
      Device.belongsTo(models.Model, {
        foreignKey: 'id',
        targetKey: 'modelID'
      })
      Device.belongsTo(models.Status, {
        foreignKey: 'id',
        targetKey: 'statusID'
      })
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
  });
  return Device;
};