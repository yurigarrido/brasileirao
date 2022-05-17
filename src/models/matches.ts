const { Model, DataTypes } = require('sequelize');
const db = require('.');
const Team = require('./teams');

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

Team.hasMany(Match, { foreignKey: 'homeTeam' as 'teamHome' });
Team.hasMany(Match, { foreignKey: 'awayTeam' as 'teamAway' });

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Match;
