const express = require('express');
const app = express();
const ClientRoutes = express.Router();

// Require Client model in our routes module
let ClientModel = require('../models/ClientModel');

// Defined store route
ClientRoutes.route('/add').post(function (req, res) {
  let client = new ClientModel(req.body);
  client.save()
    .then(game => {
    res.status(200).json({'client': 'Client added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to client database");
    });
});

// Defined get data(index or listing) route
ClientRoutes.route('/').get(function (req, res) {
    ClientModel.find(function (err, clients){
    if(err){
      console.log(err);
    }
    else {
      res.json(clients);
    }
  });
});

// Defined edit route
ClientRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  ClientModel.findById(id, function (err, client){
      res.json(client);
  });
});

//  Defined update route
ClientRoutes.route('/update/:id').post(function (req, res) {
    ClientModel.findById(req.params.id, function(err, client) {
    if (!client)
      return next(new Error('Could not load Document'));
    else {
        client.client_name = req.body.client_name;
        client.client_detail = req.body.client_detail;

        client.save().then(client => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
ClientRoutes.route('/delete/:id').get(function (req, res) {
    ClientModel.findByIdAndRemove({_id: req.params.id}, function(err, client){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ClientRoutes;