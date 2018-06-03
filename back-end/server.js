const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.clientDB).then(
      () => {console.log('Client Database is connected') },
      err => { console.log('Can not connect to the client database'+ err)}
    );
    const adUnitRoutes = require('./routes/client.route');

    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;

    app.use('/DC', adUnitRoutes);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });