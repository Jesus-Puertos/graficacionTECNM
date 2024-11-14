const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

export default function Lienzo() {
  const $elemento = $("#canvas");
  if ($elemento.getContext) {
    const ctx = $elemento.getContext("2d");
    return ctx;
  } else {
    return false;
  }
}
