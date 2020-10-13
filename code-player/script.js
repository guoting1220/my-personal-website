
$(document).ready(function(){
	var height = $(window).height();
	var menueBerHeight = $("#menueBar").height();
	$(".codeContaoiner").height(height-menueBerHeight + "px");
	$("#toggles li").click(function(){
		$(this).toggleClass("selected");   // !!!
		var selectedItem = $(this).html();
		$("#"+ selectedItem+"field").toggle();
		var showNum = $("li[class='selected']").length;
		$(".codeContaoiner").css("width", 100/showNum +"%")
	});

	$("#runButton").click(function(){
		$("iframe").contents().find('html').html("<style>"+ $("#cssCode").val() + "</style>" + $("#htmlCode").val());
		$('#resultFrame').contents().find('html').html("<style>"+$('#css').val()+"</style>"+$("#html").val());
		eval($("#jsCode").val());
	});
	
	$(".reset").click(function(){
		$(this).next().val("");
	});
	

});
