'use strict';

const userModel = require('./models/users.js');
const { Sequelize, DataTypes } = require('sequelize');
const Collections = require('./models/datacollections')

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL);

const users = userModel(sequelize, DataTypes);

const collectionUsers = new Collections(users)

module.exports = {
  db: sequelize,
  users: collectionUsers,
}