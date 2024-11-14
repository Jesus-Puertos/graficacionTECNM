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

function Triangulo(ctx) {
  // El primero es x y el segundo es y
  ctx.moveTo(40, 100);
  ctx.lineTo(100, 10);
  ctx.lineTo(160, 100);
  ctx.lineTo(40, 100);
  ctx.stroke();
}

window.addEventListener(
  "load",
  /*Nombre de la funcion*/ Triangulo(Lienzo()),
  false
);
