const mongoose = require('mongoose');

const SERVER_URL = 'localhost:27017';
const DATABASE_NAME = 'offline_maps';

class Database {
  constructor() {
    this._connect();
  }

  async _connect() {
    try {
      await mongoose.connect(`mongodb://${SERVER_URL}/${DATABASE_NAME}`, {useNewUrlParser: true});
      console.log('Database connection successful');
    } catch (error) {
      console.error('Database connection error:', error);
    }
  }
}

module.exports = new Database();
