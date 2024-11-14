// UTILITIES
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function Lienzo() {
  const $elemento = $("#canvas");
  if ($elemento.getContext) {
    const ctx = $elemento.getContext("2d");
    return ctx;
  } else {
    return false;
  }
}

function Cuadrado(ctx) {
  // El primero es x y el segundo es y
  ctx.moveTo(10, 10);
  ctx.lineTo(10, 100);
  ctx.lineTo(100, 100);
  ctx.lineTo(100, 10);
  ctx.lineTo(10, 10);
  ctx.stroke();
}

window.addEventListener(
  "load",
  /*Nombre de la funcion*/ Cuadrado(Lienzo()),
  false
);
