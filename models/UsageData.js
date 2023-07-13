'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsageData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsageData.init({
    userid: DataTypes.INTEGER,
    usageduration: DataTypes.STRING,
    usagedate: DataTypes.STRING,
    usagetime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UsageData',
  });
  return UsageData;
};