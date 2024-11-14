import Lienzo from "../helpers/funciones.js";
let x = 50
let y = 50
let radio = 20

function figura(ctx){
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(x, y, radio, 0,  Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

}


function LimpiarFigura(ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }


  document.addEventListener('mousemove', function(e){
    LimpiarFigura(Lienzo());
    x = e.clientX;
    y = e.clientY;
    figura(Lienzo());

}, false);