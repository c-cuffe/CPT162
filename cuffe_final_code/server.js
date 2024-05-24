'use strict';
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var REQUESTS_FILE = path.join(__dirname, 'requests.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/requests', function(req, res) {
  fs.readFile(REQUESTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/api/requests', function(req, res) {
  fs.readFile(REQUESTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var requests = JSON.parse(data);
    var newRequest = {
      id: Date.now(),
      fName: req.body.fName,
      lName: req.body.lName,
      dob: req.body.dob,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      email: req.body.email,
      phone: req.body.phone,
      contact: req.body.contact,
      newsletter: req.body.newsletter,
      insure: req.body.insure,
      insureOther: req.body.insureOther,
      issue: req.body.issue,
      symptoms: req.body.symptoms,
      location: req.body.location,
      learn: req.body.learn,
    };
    requests.push(newRequest);
  fs.writeFile(REQUESTS_FILE, JSON.stringify(requests, null, 4), function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(requests);
    });
  });
});

app.listen(app.get('port'), function() {
    //Just outputs that the server has started and the port number to the console.
    console.log('Server started: http://localhost:' + app.get('port') + '/');
  });
  