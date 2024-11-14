// Utilities
const $ = selector => document.querySelector(selector);

// Elements
const $canvas = $('#canvas'); // Elemento del DOM
const ctx = $canvas.getContext('2d'); // Contexto del canvas
let dibujando = false;
let startX = 0;
let startY = 0;
let lastX = 0;
let lastY = 0;



document.addEventListener('mousemove', function(e){
if(dibujando == true){
    const {offsetX, offsetY} = e;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = "black";
    ctx.stroke();
    lastX = offsetX;
    lastY = offsetY;

    console.log("se esta dibujando...");
}else{
    console.log("no dibuja nada");
}
}, false);

document.addEventListener('mousedown', function(e){
if(e.button == 0){
    dibujando = true;
    const {offsetX, offsetY} = e;
    //Guardar las coordenadas iniciales
    startX = offsetX;
    startY = offsetY;
    lastX = offsetX;
    lastY = offsetY;
  console.log("has presionado un boton izquierdo!");
}
if(e.button == 1){
    console.log("has presionado un boton centro!");
}
if(e.button == 2){
    console.log("has presionado un boton derecho!");
}
dibujando = true;
}, false);

document.addEventListener('mouseup', function(e){
console.log("has soltado un boton del mouse!");
dibujando = false;
}, false);