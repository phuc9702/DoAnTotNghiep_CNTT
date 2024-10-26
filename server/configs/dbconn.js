const { Sequelize } = require('sequelize');

const dbName = process.env.DB_NAME
const dbUsername = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbDialect = process.env.DB_DIALECT


const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
  logging: false,
});

const connectionDatabase = async() => {
    try {
        await sequelize.authenticate();
        console.log(':::Connection has been established successfully.');
      } catch (error) {
        console.error(':::Unable to connect to the database:', error);
      }
}
connectionDatabase()

module.exports = {
    connectionDatabase,
}