const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for CLient
let ClientModel = new Schema({
  client_name: {
    type: String
  },
  client_detail: {
    type: String
  }
},{
    collection: 'client'
});

module.exports = mongoose.model('ClientModel', ClientModel);