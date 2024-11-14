//import {Lienzo} from '../helpers/funciones.js'
//import {LimpiarFigura} from '../helpers/funciones.js'
var x = 50
var y = 50
var radio = 20
var direccion = "adelante"

function Lienzo() {
    var elemento = document.getElementById("canvas");
    if (elemento.getContext) {
      var ctx = elemento.getContext("2d");
      return ctx;
    } else {
      return false;
    }
  }



function figura(ctx){
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(x+radio, y+radio, radio, 0,  Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

}

function LimpiarFigura(ctx){
    ctx.clearRect(x, y, radio*2, radio*2);
  }

function Run(){
    LimpiarFigura(Lienzo());
    
    if (direccion == "adelante"){x += 2;}
    if (direccion == "abajo"){y += 2;}
    if (direccion == "atras"){x -= 2;}
    if (direccion == "arriba"){y -= 2;}
    console.log("x: " +x);
    console.log("y: " +y);

    if (x <= 0){direccion = "adelante";}
    if (y <= 0){direccion = "abajo";}
    if (x >= 470){direccion = "atras";}
    if (y >= 480){direccion = "arriba";}

    figura(Lienzo());
    requestAnimationFrame(Run);
}
document.addEventListener('keydown', function(e){
    
    if (e.keyCode == 37){direccion = "atras";}
    if (e.keyCode == 39){direccion = "adelante" ;}
    if (e.keyCode == 38){direccion = "arriba";}
    if (e.keyCode == 40){direccion = "abajo";}

}, false);

window.addEventListener('load', Run(), false);