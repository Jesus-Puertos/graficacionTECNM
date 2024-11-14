const webgl =
  canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

if (!webgl || !(webgl instanceof WebGLRenderingContext)) {
  alert("Fallo al cargar WebGL");
  console.log("Fallo al cargar WebGL");
} else {
  //   alert("WebGL cargado correctamente");
  console.log("WebGL cargado correctamente");
}
