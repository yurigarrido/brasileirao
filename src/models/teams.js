'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teams extends Model {

    static associate(models) {
      // define association here
    }
  }
  teams.init({
    teamName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'teams',
  });
  return teams;
};