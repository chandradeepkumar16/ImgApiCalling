'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    productid: DataTypes.INTEGER,
    productsku: DataTypes.STRING,
    productcode: DataTypes.STRING,
    productname: DataTypes.STRING,
    productcategory: DataTypes.STRING,
    productimage: DataTypes.STRING,
    sourcedfrom: DataTypes.STRING,
    productioncost: DataTypes.FLOAT,
    productmrp: DataTypes.FLOAT,
    productrsp: DataTypes.FLOAT,
    productrp: DataTypes.FLOAT,
    productdp: DataTypes.FLOAT,
    productsp: DataTypes.INTEGER,
    productcsp: DataTypes.FLOAT,
    productpkcost: DataTypes.FLOAT,
    productpack: DataTypes.FLOAT,
    producttranscost: DataTypes.FLOAT,
    coloravail: DataTypes.STRING,
    lumenavail: DataTypes.STRING,
    bestseller: DataTypes.INTEGER,
    launchdate: DataTypes.DATEONLY,
    productrank: DataTypes.INTEGER,
    // stampedon: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};