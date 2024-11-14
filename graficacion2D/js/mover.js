var x = 50;
var y = 50;
var radio = 20;
function Lienzo() {
    var elemento = document.getElementById("canvas");
    if (elemento.getContext) {
      var ctx = elemento.getContext("2d");
      return ctx;
    } else {
      return false;
    }
  }

function figura (ctx){
    //ctx.fillRect(x, y, 40, 40);
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(x+radio, y+radio, radio, 0,  Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

function LimpiarFigura(ctx){
    ctx.clearRect(x, y, radio*2, radio*2);
}

document.addEventListener('keydown', function(e){
    LimpiarFigura(Lienzo());
    if (e.keyCode == 37){x -= 5;}
    if (e.keyCode == 39){x += 5;}
    if (e.keyCode == 38){y -= 5;}
    if (e.keyCode == 40){y += 5;}

    figura(Lienzo());
}, false);