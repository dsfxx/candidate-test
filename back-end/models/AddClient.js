const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AddClient = new Schema({
  unit_name: {
    type: String
  },
  unit_price: {
    type: Number
  }
},{
    collection: 'addclients'
});

module.exports = mongoose.model('AddClient', AddClient);