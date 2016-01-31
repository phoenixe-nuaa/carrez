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

	// test command
	// var result = {
	// 			status: "success",
	// 			result: {
	// 				type: "Appartemnet",
	// 				city: "Levallois-Perret",
	// 				postal_code: "92300",
	// 				price_per_m2: 8593.75,
	// 				good_deal: false,
	// 				reference_price: {
	// 					lowest: 5658,
	// 					average: 7545,
	// 					highest: 11317
	// 				}
	// 			}
	// 		};
	// res.json(result);
	// return;

	leboncoin(url, function (err, data) {
		meilleursagents(data, function (err, data) {
			var result = {
				status: "success",
				result: data
			}
			res.json(result);
		});
	});
});

var server = app.listen(3000, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
