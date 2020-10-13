var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;


window.onload=function(){
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext('2d');
	setInterval(draw(),500);
	
}

function draw(){
	console.log("ww");
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(ballX,50,50, 20);
	ballX += 20;
	//ballX += 50;
}