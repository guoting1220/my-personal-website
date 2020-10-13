 $(".contentClass").css("min-height",$(window).height());
 // $(".contentField").css("min-height",$(window).height()*0.7); 

 function timeHi(){       
	var nowHour = (new Date()).getHours();
	var sayHi = "";
	if(nowHour>=0 && nowHour<=11) sayHi = "Good Morning, ";
	else if(nowHour>=12 && nowHour<18) sayHi = "Good afternoon, ";
	else sayHi = "Good evening, ";
	return sayHi;
}
//=====================================================================
$(document).ready(function (){
	$("#sayHi").text(timeHi());	
	 $("#education input[type='button']").click(function(){
	 if($(this).val()==="+"){
		$("#education input[type='button']").val('+');
		$("#education input[type='button']").next().next().hide();
		$(this).next().next().show();
		$(this).val('-');
	 }
	 else{
		$(this).next().next().hide();
		$(this).val('+');
	}
 });

   $( "#proj" ).accordion();

	$("#btn_jeopardy").click(function () {
		window.open("jeopardy/index.html");
	}); 

	$("#btn_tv_maze").click(function () {
		window.open("tv-maze/tvmaze.html");
	}); 

	$("#btn_giphy_party").click(function () {
		window.open("giphy-party/index.html");
	}); 

	$("#btn_movies_rating").click(function () {
		window.open("movies-rating/index.html");
	}); 

	$("#btn_connect_4").click(function () {
		window.open("connect-four/index.html");
	}); 

	$("#btn_meme_generator").click(function () {
		window.open("meme-generator/index.html");
	}); 

	$("#btn_memory_game").click(function () {
		window.open("memory_game/index.html");
	}); 
   
   $("#btn_codeplayer").click(function(){
	   window.open("code-player/index.html");
   });   
   
   $("#btn_recreationTester").click(function(){
	   window.open("reaction-tester/index.html");
   });   
   
   $("#slidershow").carousel();
  
//solve the problem: have the menu collapse down after clicking a hyperlink  
    $("#toggle li").click(function() {
          $(".navbar-collapse").collapse('hide');
    });
	
	
	
});

