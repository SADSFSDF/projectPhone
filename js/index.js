$(function(){
	$(".navList").on("click",function(){
		var href= ($(this).attr("href"))
		window.location.href=href;
	})
})