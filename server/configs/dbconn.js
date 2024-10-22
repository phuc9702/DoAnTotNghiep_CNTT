const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbs', 'postgres', 'pnphuc', {
  host: 'localhost',
  dialect: "postgres",
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