
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for employee
let EmployeeModel = new Schema({
  employee_fname: {
    type: String
  },
  employee_lname: {
    type: String
  },
  employee_phone: {
    type: String
  },
  employee_company: {
    type: String
  }
},{
    collection: 'employee'
});

module.exports = mongoose.model('EmployeeModel', EmployeeModel);