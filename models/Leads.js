'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Leads.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    // leadid: DataTypes.INTEGER,
    leadCategory: DataTypes.STRING,
    leadEmail: DataTypes.STRING,
    leadPhoneNumber: DataTypes.STRING,
    leadBusinessName: DataTypes.STRING,
    leadContactPerson: DataTypes.STRING,
    leadDesignation: DataTypes.STRING,
    leadAddress: DataTypes.STRING,
    leadCity: DataTypes.STRING,
    leadState: DataTypes.STRING,
    leadPincode: DataTypes.STRING,
    leadNotes: DataTypes.STRING,
    leadSubmitDate: DataTypes.STRING,
    leadSubmitTime: DataTypes.STRING,
    leadsBy: DataTypes.INTEGER,
    leadOwner: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Leads',
  });
  return Leads;
};