const mongoose = require('mongoose');

const logger = require('./logger');


const SERVER_URL = 'localhost:27017';
const DATABASE_NAME = 'offline_maps';

class Database {
  constructor() {
    this._connect();
  }

  async _connect() {
    try {
      await mongoose.connect(`mongodb://${SERVER_URL}/${DATABASE_NAME}`, { useNewUrlParser: true });
      logger.info('Database connection successful');
    } catch (error) {
      logger.error('Database connection error:', error);
    }
  }
}

module.exports = new Database();
