const{ Model, DataTypes } = require('sequelize');
import db from './database';


class Team extends Model {
  id: string;

  public teamName: string;
}

Team.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: DataTypes.STRING,
}, {
  sequelize: db,
  underscored: true,
  modelName: 'teams',
  tableName: 'teams',
  timestamps: false,
});

export default Team;
