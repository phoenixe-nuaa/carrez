'use strict'

function parse(url, callback) {
	var env = require('jsdom').env;
	env(url, function (errors, window) {
		if(errors == null) {
			var $ = require('jquery')(window);

			var json_data = {
				url: url,
				title: $("h1").first().text(),
				property: {
					price: parseInt($("[itemprop='price']").text().replace(" ", "")),
					type: $(".lbcParams>table>tbody>tr>td").eq(0).text(),
					area: parseInt($(".lbcParams>table>tbody>tr>td").eq(2).text()),
					rooms: parseInt($(".lbcParams>table>tbody>tr>td").eq(1).text()),
					location: {
						city: $("[itemprop='addressLocality']").text(),
						postal_code: $("[itemprop='postalCode']").text()
					}
				}
			};
			callback(null, json_data);
		}
		else {
			callback({error: errors}, null);
		}
	});
}

module.exports = parse;
