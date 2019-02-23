console.log("The Javascript Is Working");
var C = document.getElementById("C");
var ctx = C.getContext("2d");

ctx.beginPath();
ctx.arc(250,250,100,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill();