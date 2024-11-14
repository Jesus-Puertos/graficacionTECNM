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

function rectangulo(ctx) {
  ctx.fillStyle = "a21b1b";
  ctx.fillStyle = "#aba3a3";
  ctx.fillRect(50, 50, 150, 100);
  ctx.strokeRect(50, 50, 150, 100);
}

window.addEventListener(
  "load",
  /*Nombre de la funcion*/ Triangulo(Lienzo()),
  false
);
