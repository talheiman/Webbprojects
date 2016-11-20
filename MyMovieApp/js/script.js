$(document).ready(start);
function start() {
$("#btnMenu").on("click", showHideMenu);
$("#nav li").on("click", loadPage);
loadStartPage();
resize();
}


function resize() {
window.onresize = onresize();
}

function onrezie() {
	if($(window).width() >= 500){
	$("#wrapper nav").slideDown(100);
	}
}

function showHideMenu() {
$("#wrapper nav").slideToggle(200);
}

function loadStartPage() {
	$("#loading").fadeIn(300);
	 $.ajax(
        {url:"start.html"}
    ).done(function(data) {
        $("#wrapper > article > section").html(data);
		$("#loading").fadeOut(300);
    }).fail(function() {
        alert("Det gick inte att hämta sidan");
		$("#loading").fadeOut(300);
    });
}

function loadPage() {
	$("#loading").fadeIn(300);
    var page = $(this).attr("data-link");	
    $.ajax(
        {url: page, cache:false}
    ).done(function(data) {
		$("#loading").fadeOut(300);
        $("#wrapper > article > section").html(data);
		if($(window).width() <= 500){
			$("#wrapper nav").slideUp(100);
		}
    }).fail(function() {
        alert("Det gick inte att hämta sidan");
		$("#loading").fadeOut(300);
    });
}