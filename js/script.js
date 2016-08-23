$(document).ready(function() {
	$("#home-nav").click(function() {
		$("#home").removeClass("hidden");
		$("#home-nav").addClass("active-nav");

		$("#about").addClass("hidden");
		$("#resume").addClass("hidden");
		$("#articles").addClass("hidden");

		$("#about-nav").removeClass("active-nav");
		$("#resume-nav").removeClass("active-nav");
		$("#articles-nav").removeClass("active-nav");
	});

	$("#about-nav").click(function() {
		$("#about").removeClass("hidden");
		$("#about-nav").addClass("active-nav");

		$("#home").addClass("hidden");
		$("#resume").addClass("hidden");
		$("#articles").addClass("hidden");

		$("#home-nav").removeClass("active-nav");
		$("#resume-nav").removeClass("active-nav");
		$("#articles-nav").removeClass("active-nav");
	});

	$("#resume-nav").click(function() {
		$("#resume").removeClass("hidden");
		$("#resume-nav").addClass("active-nav");

		$("#home").addClass("hidden");
		$("#about").addClass("hidden");
		$("#articles").addClass("hidden");

		$("#home-nav").removeClass("active-nav");
		$("#about-nav").removeClass("active-nav");
		$("#articles-nav").removeClass("active-nav");
	});

	$("#articles-nav").click(function() {
		$("#articles").removeClass("hidden");
		$("#articles-nav").addClass("active-nav");

		$("#home").addClass("hidden");
		$("#about").addClass("hidden");
		$("#resume").addClass("hidden");

		$("#home-nav").removeClass("active-nav");
		$("#about-nav").removeClass("active-nav");
		$("#resume-nav").removeClass("active-nav");
	});
});
