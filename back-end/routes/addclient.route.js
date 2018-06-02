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
    res.status(200).json({'addClient': 'addClient in added successfully'});
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
    AddClient.findById(req.params.id, function(err, adUnit) {
    if (!adUnit)
      return next(new Error('Could not load Document'));
    else {
        addClient.unit_name = req.body.unit_name;
        addClient.unit_price = req.body.unit_price;

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
    AddClient.findByIdAndRemove({_id: req.params.id}, function(err, adClient){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = addClientRoutes;