// AdUnit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AddClient = new Schema({
  client_name: {
    type: String
  },
  client_detail: {
    type: String
  }
},{
    collection: 'addclient'
});

module.exports = mongoose.model('AddClient', AddClient);