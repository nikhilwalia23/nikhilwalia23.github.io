var canvas;
var ctx1;
var l,b;
onmessage = function(evnt)
{
  canvas1=evnt.data.starfields;
  canvas2=evnt.data.shootingstar;
  l=evnt.data.dimension.length;
  b=evnt.data.dimension.bredth;
  ctx1=canvas1.getContext("2d");
  ctx2=canvas2.getContext("2d");
  canvas1.width=b;
  canvas1.height=l;
  canvas2.width=b;
  canvas2.height=l;
  run();
}
//Draw Star on StarField
function draw_star(x,y,paint=1)
{  
  ctx1.beginPath();
  ctx1.arc(x,y,paint,0,2*Math.PI);
  ctx1.fillStyle = 'white';
  ctx1.fill();
  ctx1.strokStyle="white";
  ctx1.stroke();
}
//Draw Shooting star
function draw_shooting_star()
{
  ctx2.beginPath();
  ctx2.moveTo(50, 10);
  ctx2.lineTo(50, 200);
  ctx2.lineWidth = 5;
  ctx2.fill();
}
function run()
{
  var star = setInterval(() => {
    draw_star(Math.random()*b,Math.random()*l,Math.random()/0.5);
  }, 15);
  setTimeout(() => {
    clearInterval(star);
  }, 2000);
  draw_shooting_star();
}
