var canvas = document.querySelector('canvas');
canvas.width=200;
canvas.height=50;
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "#02B0ED";
ctx.fillStyle ="#02B0ED";
ctx.moveTo(0, 25);
ctx.lineTo(90, 0);
ctx.lineTo(70,25);
ctx.lineTo(90,50);
ctx.lineTo(0,25);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#F5C50A";
ctx.fillStyle ="#F5C50A";
ctx.moveTo(110, 0);
ctx.lineTo(200, 25);
ctx.lineTo(110, 50);
ctx.lineTo(130,25);
ctx.lineTo(110,0);
ctx.fill();
ctx.stroke();