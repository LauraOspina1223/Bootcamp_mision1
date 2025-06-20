 function cambiarColor() {
let color = "#" + Math.floor(Math.random()*16777215).toString(16) /* Lo primero que lleva esta cadena es un # - Math.random me genera número aleatorios entre 0 y 1*/ 
/* #ffffff */

/* console.log( Math.floor(Math.random()*16777215).toString()); /* Este el número más alto que se puede respresentar en hexadecimal y es = #ffffff, de 0 hasta e número */
/* El Math.floor me lo lleva a que sea entero, me quita los decimales que se producen con el Math.random */
/* El string me lo convierte a tipo texto */

/* console.log( Math.floor(Math.random()*16777215).toString(16));  */
/* Esta línea es para verlo en hexadecimal */ 

/* console.log("----------------"); */

document.body.style.backgroundColor = color;



}
       