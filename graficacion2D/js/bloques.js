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

function dibujar(ctx) {
  if (!ctx) return; // Asegurarse de que ctx no sea falso
  ctx.fillStyle = "#a21b1b";
  let x = 50;
  let y = 50;
  let filas = 4;
  let columnas = 6;

  let ancho = 100;
  let alto = 50;
  for (let i = 1; i <= filas; i++) {
    for (let k = 1; k <= columnas; k++) {
      if ((i % 2 === 0 && k === 1) || (i % 2 !== 0 && k === columnas)) {
        ancho = 50;
      } else {
        ancho = 100;
      }
      ctx.fillRect(x, y, ancho, alto);
      x += ancho + 4;
    }
    x = 50;
    y += 54;
  }
}

window.addEventListener(
  "load",
  () => {
    const ctx = Lienzo();
    dibujar(ctx);
  },
  false
);
