$(document).ready(function() {
	$('.toform').click(function() {
		$("html, body").animate({ scrollTop: $("form").offset().top - 300 }, 1000);
		return false;
	});
});
