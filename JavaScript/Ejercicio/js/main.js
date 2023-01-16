//APARTADO 1: Pedir por pantalla mediante un prompt tu nombre y almacenarlo en una variable.
let nombre = prompt("Introduzca su nombre:");
//APARTADO 2: Seleccionar el h1 cuyo id sea titulo y almacenarlo en una variable constante.
const titulo = document.querySelector("#titulo");
//APARTADO 3: Cambiar el textContent del elemento anterior por un String que diga "Hola " y el nombre introducido por el prompt.
titulo.textContent = "Hola " + nombre;
//APARTADO 4: Añadir al className del elemento anterior la clase " letraRoja".
titulo.className += " letraRoja";
//APARTADO 5: Seleccionar el div contenedor de cartas y almacenarlo en una variable constante.
const contenedorDeCartas = document.querySelector("#contenedorCartas");
//APARTADO 6: Añadir al innerHTML del elemento anterior un div con las clases "carta" y "fondoRojo".
contenedorDeCartas.innerHTML += `<div class="carta fondoRojo"></div>`;
//APARTADO 7: Seleccionar el div cuya clase sea "carta fondoRojo" y almacenarlo en una variable constante.
const cartaEspec = document.querySelector(".carta.fondoRojo");
//APARTADO 8: Añadir al innerHTML del elemento anterior un <p> en el que aparezca escrito "Esto es el contenido".
cartaEspec.innerHTML = `<p>Esto es el contenido</p>`;