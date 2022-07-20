'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SocialMedia.belongsTo(
        models.Organization,
        { as: 'organization' },
        { foreignKey: 'organizationId' }
      );
    }
  }
  SocialMedia.init(
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      organizationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'SocialMedia',
    }
  );
  return SocialMedia;
};
