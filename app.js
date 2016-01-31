'use strict'

var express = require('express'),
	bodyParser = require('body-parser');
var leboncoin = require("./leboncoin.js");
var meilleursagents = require("./meilleursagents.js");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.render('index');
});

app.post('/ajax', function (req, res) {
	// var url = "http://www.leboncoin.fr/ventes_immobilieres/915700197.htm?ca=12_s"
	var url = req.body.url;
	// console.log(req.query);
	leboncoin(url, function (err, data) {
		meilleursagents(data, function (err, data) {
			res.json(data);
		});
	});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
