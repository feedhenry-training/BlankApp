var express = require('express');

//FeedHenry services
var webapp = require('fh-webapp');
$fh = require('fh-api');
var mainjs = require('main.js');

var app = express();

//enable FeedHenry services
app.use('/sys', webapp.sys(mainjs));
app.use('/mbaas', webapp.mbaas);
app.use('/cloud', webapp.cloud(mainjs));

// You can define custom URL handlers here, like this one:
app.use('/', function(req, res){
  res.end('Your Cloud App is Ready');
});

module.exports = app.listen(process.env.FH_PORT || process.env.VCAP_APP_PORT || 8001);