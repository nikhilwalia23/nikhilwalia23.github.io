var canvas;
var ctx;
var l,b;
onmessage = function(evnt)
{
  canvas=evnt.data.starfields;
  l=evnt.data.dimension.length;
  b=evnt.data.dimension.bredth;
  ctx=canvas.getContext("2d");
  console.log(b);
  canvas.width=b-20;
  canvas.height=l;
}
function draw_star(x,y,paint=1)
{  
  ctx.beginPath();
  ctx.arc(x,y,paint,0,2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.strokStyle="white";
  ctx.stroke();
}
//Draw Star on StarField
for(var i=0;i<300;i++)
{
  setTimeout(() => {
    draw_star(Math.random()*b,Math.random()*l,Math.random()/0.7);
  }, 1000);
}