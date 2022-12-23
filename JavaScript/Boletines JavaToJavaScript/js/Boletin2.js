// BOLETIN 2

//1. Crear una variable entera e imprimirla por pantalla sin asignarle ningún valor.
//¿Qué se ha impreso?
let realizarEj1 = document.querySelector("#realizar-ej1");
let variable1;
realizarEj1.onclick = function realizarEjercicio() {
    alert("1. Crear una variable entera e imprimirla por pantalla sin asignarle ningún valor. ¿Qué se ha impreso?");
    let ej = document.querySelector("#ej1");
    ej.innerHTML = `<p>let variable1;</p>` + `<p>Se ha impreso: ${variable1}</p>`;
}
let borrarEj1 = document.querySelector("#borrar-ej1");
borrarEj1.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej1");
    ej.innerHTML = ``
}


//2a. Crear una variable entera con el valor 0. Incrementar su valor en 3 unidades utilizando el operador de suma + y asignación =, e imprimirla por pantalla.
let valor0 = 0;
valor0 += 3;
let realizarEj2a = document.querySelector("#realizar-ej2a");
realizarEj2a.onclick = function realizarEjercicio() {
    alert("2a. Crear una variable entera con el valor 0. Incrementar su valor en 3 unidades utilizando el operador de suma + y asignación =, e imprimirla por pantalla.");
    let ej = document.querySelector("#ej2a");
    ej.innerHTML = `<p>let valor0 = 0;</p>` + `<p>valor0 += 3;</p>` + `<p>RESULTADO: variable1 = ${valor0}</p>`;
}
let borrarEj2a = document.querySelector("#borrar-ej2a");
borrarEj2a.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej2a");
    ej.innerHTML = ``
}

//2b. Decrementar su valor en una unidad utilizando el operador de decremento --. Imprimirla por pantalla.
valor0--;
let realizarEj2b = document.querySelector("#realizar-ej2b");
realizarEj2b.onclick = function realizarEjercicio() {
    alert("2b. Decrementar su valor en una unidad utilizando el operador de decremento --. Imprimirla por pantalla.");
    let ej = document.querySelector("#ej2b");
    ej.innerHTML = `<p>Valor de "valor0": 3</p>` + `<p>valor0--;</p>` + `<p>Valor de "valor0": ${valor0}</p>`;
}
let borrarEj2b = document.querySelector("#borrar-ej2b");
borrarEj2b.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej2b");
    ej.innerHTML = ``
}

//3. Incrementar su valor en 4 unidades sin utilizar el operador de suma + y asignación =, e imprimirla por pantalla.
let realizarEj3 = document.querySelector("#realizar-ej3");
realizarEj3.onclick = function realizarEjercicio() {
    alert("3. Incrementar su valor en 4 unidades sin utilizar el operador de suma + y asignación =, e imprimirla por pantalla.");
    let ej = document.querySelector("#ej3");
    ej.innerHTML = `<p>Valor de "valor0": ${valor0}`
    valor0++;
    valor0++;
    valor0++;
    valor0++;
    ej.innerHTML += `<p>valor0++;</p>` + `<p>valor0++;</p>` + `<p>valor0++;</p>` + `<p>valor0++;</p>` + `<p>Valor de "valor0": ${valor0}</p>`;
}
let borrarEj3 = document.querySelector("#borrar-ej3");
borrarEj3.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej3");
    ej.innerHTML = ``
}

//4. Crear otra variable entera y asignarle el valor 48.76.
let var1 = 48.76;
let realizarEj4 = document.querySelector("#realizar-ej4");
realizarEj4.onclick = function realizarEjercicio() {
    alert("4. Crear otra variable entera y asignarle el valor 48.76.");
    let ej = document.querySelector("#ej4");
    ej.innerHTML = `<p>let var1= ${var1}`
}
let borrarEj4 = document.querySelector("#borrar-ej4");
borrarEj4.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej4");
    ej.innerHTML = ``
}

//5. Modificarla dividiendo por 50 e imprimir el resultado por pantalla.
var1 = var1 / 50;
let realizarEj5 = document.querySelector("#realizar-ej5");
realizarEj5.onclick = function realizarEjercicio() {
    alert("5. Modificarla dividiendo por 50 e imprimir el resultado por pantalla.");
    let ej = document.querySelector("#ej5");
    ej.innerHTML = `<p>var1 = var1 / 50;</p>` + `<p>var1= ${var1}`
}
let borrarEj5 = document.querySelector("#borrar-ej5");
borrarEj5.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej5");
    ej.innerHTML = ``
}
/*
//6. Modificarla sumándole 1 y multiplicando por 48 e imprimir el resto de dividirla entre 46.
console.log("Ejercicio 6: ");
var1 = ((var1 + 1) * 48);
console.log(var1 % 46);

//7. Sin modificar el valor de la variable, imprimir por pantalla el resultado de elevarla al cuadrado.
console.log("Ejercicio 7: ");
console.log(var1 * var1);
console.log(Math.pow(var1, 2));

//8. Crear dos variables de tipo float, dándoles un valor inicial e imprimiéndolas por pantalla.
console.log("Ejercicio 8: ");
let x = prompt("Introduzca el primer numero: ");
let y = prompt("Introduzca el segundo numero: ");
console.log("El primer numero vale: " + x + "\n" + "El segundo numero vale: " + y);

//9. Imprimir por pantalla el resultado de comprobar si la primera es mayor que la segunda.
console.log("Ejercicio 9: ");
console.log(x > y); //false significa q x es menor que y; true significa que y es menor que x

//10. Cambiar la primera con el valor de la segunda multiplicado por dos, y volver a imprimir por pantalla
//el resultado de la comprobación anterior.
console.log("Ejercicio 10: ");
x = y * 2;
console.log(x > y);

//11. Imprimir por pantalla el resultado de comprobar si la primera es menor o igual que la segunda.
console.log("Ejercicio 11: ");
console.log(x <= y);

//12. Repetir el ejercicio anterior pero almacenando el resultado de la comprobación
//en una variable, e imprimiendo después por pantalla dicha variable.
console.log("Ejercicio 12: ");
let menorIgual = x <= y;
console.log(menorIgual);*/