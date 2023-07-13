'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Negotiator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Negotiator.init({
    userid: DataTypes.INTEGER,
    productname: DataTypes.STRING,
    boxquantity: DataTypes.STRING,
    recurring: DataTypes.STRING,
    recurringDays: DataTypes.STRING,
    leadrank: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    totalpieces: DataTypes.STRING,
    totalorderplaced: DataTypes.STRING,
    checkvd: DataTypes.STRING,
    checkcd: DataTypes.STRING,
    volumediscount: DataTypes.STRING,
    totalaftervd: DataTypes.STRING,
    cashpayment: DataTypes.STRING,
    cashdiscount: DataTypes.STRING,
    finalamount: DataTypes.STRING,
    invoicelink: DataTypes.STRING,
    businessname: DataTypes.STRING,
    personname: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    emailaddress: DataTypes.STRING,
    pincode: DataTypes.STRING,
    address: DataTypes.STRING,
    mrp: DataTypes.STRING,
    rp: DataTypes.STRING,
    totalBeforeDiscount: DataTypes.STRING,
    totalAfterCashDiscount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Negotiator',
  });
  return Negotiator;
};