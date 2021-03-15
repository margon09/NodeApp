$(document).ready(function () {
	$(".btn").click(function () {
		const img = $(".resizeme");

		if (img.width() < 200) {
			img.animate({
				width: "1097px",
				height: "639px"
			}, 1000);
		} else {
			img.animate({
				width: img.attr("width"),
				height: img.attr("height")
			}, 1000);
		}
	})
});

// http://jsfiddle.net/bzMmE/1/