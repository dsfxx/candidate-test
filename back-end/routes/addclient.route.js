const express = require('express');
const app = express();
const addClientRoutes = express.Router();

// Require AdUnit model in our routes module
let AddClient = require('../models/AddClient');

// Defined store route
addClientRoutes.route('/add').post(function (req, res) {
  let addClient = new AddClient(req.body);
  addClient.save()
    .then(game => {
    res.status(200).json({'addClient': 'AddClient in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
addClientRoutes.route('/').get(function (req, res) {
    AddClient.find(function (err, addClients){
    if(err){
      console.log(err);
    }
    else {
      res.json(addClients);
    }
  });
});

// Defined edit route
addClientRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AddClient.findById(id, function (err, addClient){
      res.json(addClient);
  });
});

//  Defined update route
addClientRoutes.route('/update/:id').post(function (req, res) {
    AddClient.findById(req.params.id, function(err, addClient) {
    if (!addClient)
      return next(new Error('Could not load Document'));
    else {
        addClient.client_name = req.body.client_name;
        addClient.client_detail = req.body.client_detail;

        addClient.save().then(addClient => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
addClientRoutes.route('/delete/:id').get(function (req, res) {
    AddClient.findByIdAndRemove({_id: req.params.id}, function(err, addClient){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = addClientRoutes;