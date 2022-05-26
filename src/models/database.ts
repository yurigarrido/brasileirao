import { Sequelize } from 'sequelize';

const db = new Sequelize(
  process.env.DB_NAME || 'brasileirao',
  process.env.DB_USER || 'root',
  process.env.DB_PAS || '12345678',
  {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '12345678',
    database: process.env.DB_NAME || 'brasileirao',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3002,
    dialect: 'mysql',
    dialectOptions: {
      timezone: 'Z',
    },
    logging: false,
  });

export default db;
