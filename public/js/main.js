$('#compute').click(function () {
	var post_url = $("#url").val();
	$.post('./ajax', {
		url: post_url
	}, function (data, status) {
		if(status == "success") {
			if(data.good_deal) {
				$("#result").text("Good deal");
			}
			else {
				$("#result").text("Not a good deal");
			}
		}
	});
});
