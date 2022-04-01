//alert("¡Hola mundo!");
//console.log("Mensaje");
var NOMBRE="Wen Mellado";
let edad=10;
//edad="No quiero decirlo";
let titulo=document.getElementById('titulo');
let mensaje="Mi nombre es " + NOMBRE + " y mi edad es " +(edad+11);
console.log(mensaje);
titulo.innerHTML= mensaje;
titulo.style.color="#ce7834";
titulo.style.textTransform="uppercase";
titulo.onclick=function(){
    titulo.innerHTML="Le diste clic";
    titulo.innerHTML=titulo.innerHTML.toLocaleLowerCase(); 
};