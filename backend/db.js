// db.js

const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance (replace the values with your actual DB credentials)
const sequelize = new Sequelize('MindTrack', 'postgres', '1111', {
  host: 'localhost',
  dialect: 'postgres',
});

// Test the connection
sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Unable to connect:', err));

// Define a model for lessons
const Lesson = sequelize.define('Lesson', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

// Sync the models with the database
sequelize.sync()
  .then(() => console.log('Models synced with database'));

module.exports = { sequelize, Lesson };
