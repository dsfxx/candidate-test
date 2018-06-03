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


// Defined get all employees by company ID
EmployeeRoutes.route('/getCompanyEmployee/:id').get(function (req, res) {
  let id = req.params.id;
  var query = { employee_company : id}
  EmployeeModel.find(query, function (err, result){
      res.json(result);
  });
});


// Defined edit route
EmployeeRoutes.route('/employeeEdit/:id').get(function (req, res) {
  let id = req.params.id;
  EmployeeModel.findById(id, function (err, result){
      res.json(result);
  });
});

//  Defined update route
EmployeeRoutes.route('/employeeupdate/:id').post(function (req, res) {
    EmployeeModel.findById(req.params.id, function(err, result) {
    if (!result)
      return next(new Error('Could not load Document'));
    else {
        result.employee_fname = req.body.employee_fname;
        result.employee_lname = req.body.employee_lname;
        result.employee_phone = req.body.employee_phone;
        result.employee_company = req.body.employee_company;

        result.save().then(result => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
EmployeeRoutes.route('/employeedelete/:id').get(function (req, res) {
    EmployeeModel.findByIdAndRemove({_id: req.params.id}, function(err, client){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = EmployeeRoutes;