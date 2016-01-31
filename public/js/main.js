$("#compute").click(function () {
	(function init() {
		$("#compute").addClass("loading");
		$("#result").fadeOut();
		$("#answer").removeClass("green");
		$("#values").removeClass("green");
		$("#answer").removeClass("yellow");
		$("#values").removeClass("yellow");
	}());

	var post_url = $("#url").val();
	$.post('./ajax', {
		url: post_url
	}, function (data, status) {
		$("#compute").removeClass("loading");
		if(status == "success" && data.status == "success") {
			$("#compute").addClass("green");
			$("#compute").text("Succeed");
			setTimeout(function () {
				$("#compute").removeClass("green");
				$("#compute").text("Evaluate");
			}, 3000);

			if(data.result.good_deal) {
				$("#answer").addClass("green");
				$("#answer").text("Good deal");
				$("#values").addClass("green");
			}
			else {
				$("#answer").addClass("yellow");
				$("#answer").text("Not a good deal");
				$("#values").addClass("yellow");
			}

			$("#values>tbody>tr:eq(0)>td:last").text(data.result.city+" "+data.result.postal_code);
			$("#values>tbody>tr:eq(1)>td:last").text(data.result.type);
			$("#values>tbody>tr:eq(2)>td:last").text(data.result.price_per_m2.toFixed(2)+" €");
			$("#values>tbody>tr:eq(3)>td:last").text(data.result.reference_price.lowest+" €");
			$("#values>tbody>tr:eq(4)>td:last").text(data.result.reference_price.average+" €");
			$("#values>tbody>tr:eq(5)>td:last").text(data.result.reference_price.highest+" €");

			$("#result").fadeIn();
		}
		else {
			// Failed to wrap data
			$("#compute").addClass("red");
			$("#compute").text("Failed");
			setTimeout(function () {
				$("#compute").removeClass("red");
				$("#compute").text("Evaluate");
			}, 3000);
		}
	});
});
