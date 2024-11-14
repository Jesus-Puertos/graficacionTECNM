export default function Lienzo() {
   var elemento = document.getElementById("canvas"); 
   if (elemento.getContext) 
    {
       var ctx = elemento.getContext("2d"); return ctx; 
      } 
   else 
   {
     return false; 
    }
  
}
