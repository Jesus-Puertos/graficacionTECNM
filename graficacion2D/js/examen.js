import Lienzo from "./lienzo.js";

const dibujar = (ctx) => {
  ctx.beginPath();

  // Triángulo isósceles
  ctx.moveTo(40, 100);
  ctx.lineTo(100, 10);
  ctx.lineTo(160, 100);
  ctx.lineTo(40, 100);
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.beginPath();

  //Hexagono
  ctx.moveTo(200, 100);
  ctx.lineTo(200, 100);
  ctx.lineTo(225, 50);
  ctx.lineTo(275, 50);
  ctx.lineTo(300, 100);
  ctx.lineTo(275, 150);
  ctx.lineTo(225, 150);
  ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.beginPath();

  // Cuadrado (desplazado a la derecha del triángulo)
  ctx.moveTo(400, 10);
  ctx.lineTo(400, 100);
  ctx.lineTo(490, 100);
  ctx.lineTo(490, 10);
  ctx.lineTo(400, 10);
  ctx.stroke();
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.beginPath();

  // Rectángulo
  ctx.fillStyle = "green";
  ctx.fillRect(50, 200, 180, 100);
  ctx.strokeRect(50, 200, 180, 100);
  ctx.beginPath();

  // Triángulo rectángulo
  ctx.moveTo(250, 200);
  ctx.lineTo(250, 300);
  ctx.lineTo(350, 200);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = "#008B8B";
  ctx.fill();
  ctx.beginPath();

  //Pentagono
  ctx.moveTo(400, 200);
  ctx.lineTo(450, 150);
  ctx.lineTo(500, 200);
  ctx.lineTo(475, 250);
  ctx.lineTo(425, 250);
  ctx.lineTo(400, 200);
  ctx.stroke();
  ctx.fillStyle = "pink";
  ctx.fill();
  ctx.beginPath();
};

window.addEventListener(
  "load",
  () => {
    const ctx = Lienzo();
    dibujar(ctx);
  },
  false
);
