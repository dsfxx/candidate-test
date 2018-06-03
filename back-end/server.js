const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('DriverCheck Database is connected') },
      err => { console.log('Can not connect to the DriverCheck database'+ err)}
    );

    const adUnitRoutes = require('./routes/client.route');
    const employeeRoutes = require('./routes/employee.route');

    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;

    app.use('/DC', adUnitRoutes, employeeRoutes);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });