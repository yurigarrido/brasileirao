const { Model, DataTypes } = require('sequelize');
const db = require('.');
const Teams = require('./teams');

class Match extends Model {
  public homeTeamGoals: string;

  public awayTeamGoals: string;

  public inProgress: boolean;
}

Match.init({
  homeTeamGoals: DataTypes.INTEGER,
  awayTeamGoals: DataTypes.INTEGER,
  inProgress: DataTypes.BOOLEAN,
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'matches',
  tableName: 'matches',
});

Teams.hasMany(Match, { foreignKey: 'homeTeam' as 'teamHome' });
Teams.hasMany(Match, { foreignKey: 'awayTeam' as 'teamAway' });

Match.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Match;
