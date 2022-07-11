'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organization.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    phone: DataTypes.STRING,
    adress: DataTypes.STRING,
    welcomeText: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};