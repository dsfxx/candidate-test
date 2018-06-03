const express = require('express');
const app = express();
const EmployeeRoutes = express.Router();

// Require Employee model in our routes module
let EmployeeModel = require('../models/EmployeeModel');

// Defined store route
EmployeeRoutes.route('/employeeAdd').post(function (req, res) {
  let employee = new EmployeeModel(req.body);
  employee.save()
    .then(game => {
    res.status(200).json({'client': 'Employee added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to employee database");
    });
});

// Defined get data(index or listing) route
EmployeeRoutes.route('/getAllEmployee').get(function (req, res) {
    EmployeeModel.find(function (err, employees){
    if(err){
      console.log(err);
    }
    else {
      res.json(employees);
    }
  });
});


module.exports = EmployeeRoutes;