// BOLETIN 3

//1. Lee por pantalla un nombre y almacénalo en una variable. Imprime la variable por pantalla.
let realizarEj1 = document.querySelector("#realizar-ej1");
let nombre;
realizarEj1.onclick = function realizarEjercicio() {
    alert("1. Lee por pantalla un nombre y almacénalo en una variable. Imprime la variable por pantalla.");
    nombre = prompt("Escriba su nombre:");
    let ej = document.querySelector("#ej1");
    ej.innerHTML = `<p>Su nombre es:</p>` + `<p>${nombre}</p>`;
}
let borrarEj1 = document.querySelector("#borrar-ej1");
borrarEj1.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej1");
    ej.innerHTML = ``
}

//2. Lee por pantalla una edad y almacénalo en una variable. Imprime la variable por pantalla.
let realizarEj2 = document.querySelector("#realizar-ej2");
let edad;
realizarEj2.onclick = function realizarEjercicio() {
    alert("2. Lee por pantalla una edad y almacénalo en una variable. Imprime la variable por pantalla.");
    edad = prompt("Escriba su edad:");
    let ej = document.querySelector("#ej2");
    ej.innerHTML = `<p>Su edad es:</p>` + `<p>${edad} años</p>`;
}
let borrarEj2 = document.querySelector("#borrar-ej2");
borrarEj2.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej2");
    ej.innerHTML = ``
}

//3. ¿Pueden modificarse los ejercicios anteriores para ahorrarse la variable?
let realizarEj3 = document.querySelector("#realizar-ej3");
realizarEj3.onclick = function realizarEjercicio() {
    alert("3. ¿Pueden modificarse los ejercicios anteriores para ahorrarse la variable?");
    prompt("Escriba su nombre:");
    prompt("Escriba su edad:");
    let ej = document.querySelector("#ej3");
    ej.innerHTML = `<p>No es posible ya que los datos introducidos no se han guardado</p>`;
}
let borrarEj3 = document.querySelector("#borrar-ej3");
borrarEj3.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej3");
    ej.innerHTML = ``
}

//4.a Lee por pantalla una temperatura en grados Celsius e imprímela por pantalla.
let temp;
let realizarEj4a = document.querySelector("#realizar-ej4a");
realizarEj4a.onclick = function realizarEjercicio() {
    alert("4.a Lee por pantalla una temperatura en grados Celsius e imprímela por pantalla.");
    temp = Number.parseFloat(prompt("Introduzca una temperatura en Celsius;"));
    let ej = document.querySelector("#ej4a");
    ej.innerHTML = `<p>${temp} ºC</p>`;
}
let borrarEj4a = document.querySelector("#borrar-ej4a");
borrarEj4a.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej4a");
    ej.innerHTML = ``
}

//4.b Repite, pero imprimiendo por pantalla en grados Kelvin (hay que convertir).
let realizarEj4b = document.querySelector("#realizar-ej4b");
realizarEj4b.onclick = function realizarEjercicio() {
    alert("4.b Repite, pero imprimiendo por pantalla en grados Kelvin (hay que convertir).");
    temp = Number.parseFloat(prompt("Introduzca una temperatura en Celsius:"));
    let tempKelvin = temp+273.15;
    let ej = document.querySelector("#ej4b");
    ej.innerHTML = `<p>${temp} ºC = ${tempKelvin} K</p>`;
}
let borrarEj4b = document.querySelector("#borrar-ej4b");
borrarEj4b.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej4b");
    ej.innerHTML = ``
}

//5. Crea un programa que calcule el área de un rectángulo (base x altura),
//pidiendo por pantalla los datos necesarios.
let base;
let altura;
let area;
let realizarEj5 = document.querySelector("#realizar-ej5");
realizarEj5.onclick = function realizarEjercicio() {
    alert("5. Crea un programa que calcule el área de un rectángulo (base x altura), pidiendo por pantalla los datos necesarios.");
    base = Number.parseFloat(prompt("Introduzca la base del rectángulo: "));
    altura = Number.parseFloat(prompt("Introduzca la altura del rectángulo: "));
    area = (base*altura)/2;
    let ej = document.querySelector("#ej5");
    ej.innerHTML = `<p>El área del rectángulo es: ${area} metros cuadrados</p>`;
}
let borrarEj5 = document.querySelector("#borrar-ej5");
borrarEj5.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej5");
    ej.innerHTML = ``
}

//6. Crea un programa que calcule el Índice de Masa Corporal (IMC), pidiendo
//por pantalla los datos necesarios.
let peso;
let alto;
let realizarEj6 = document.querySelector("#realizar-ej6");
realizarEj6.onclick = function realizarEjercicio() {
    alert("6. Crea un programa que calcule el Índice de Masa Corporal (IMC), pidiendo por pantalla los datos necesarios.");
    peso = Number.parseFloat(prompt("Introduzca su peso en kilos: "));
    alto = Number.parseFloat(prompt("Introduzca su altura en metros: "));
    let IMC = peso / (alto * alto);
    let ej = document.querySelector("#ej6");
    if (IMC < 18.5) {
        ej.innerHTML = `<p>Usted es calificada como persona de bajo peso</p>`
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        ej.innerHTML = `<p>Usted es calificada como persona con peso normal</p>`
    } else if (IMC >= 25 && IMC <= 29.9) {
        ej.innerHTML = `<p>Usted es calificada como persona con sobrepeso</p>`
    } else {
        ej.innerHTML = `<p>Usted es calificada como persona con obesidad</p>`
    }
}
let borrarEj6 = document.querySelector("#borrar-ej6");
borrarEj6.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej6");
    ej.innerHTML = ``
}


//7. Crea un programa que lea el precio sin IVA de un producto e imprima
//el valor final con IVA del mismo.
let precio;
let realizarEj7 = document.querySelector("#realizar-ej7");
realizarEj7.onclick = function realizarEjercicio() {
    alert("7. Crea un programa que lea el precio sin IVA de un producto e imprima el valor final con IVA del mismo.");
    precio = Number.parseFloat(prompt("Introduzca el precio sin IVA: "));
    let precioIVA = precio*1.21;
    let ej = document.querySelector("#ej7");
    ej.innerHTML = `<p>El precio sin IVA es: ${precio}€</p>` + `<p>El precio sin IVA es: ${precioIVA}€</p>`;
}
let borrarEj7 = document.querySelector("#borrar-ej7");
borrarEj7.onclick = function borarEjercicio() {
    let ej = document.querySelector("#ej7");
    ej.innerHTML = ``
}
/*
    //8. Crea un programa que lea el precio sin IVA de tres productos e imprima
    //el valor total con IVA que paga el comprador, así como el valor medio con y sin IVA.
    console.log("Ejercicio 8: ");
    let prod1 = Number.parseInt(prompt("Introduzca el precio sin IVA del producto 1: "));
    let prod2 = Number.parseInt(prompt("Introduzca el precio sin IVA del producto 2: "));
    let prod3 = Number.parseInt(prompt("Introduzca el precio sin IVA del producto 3: "));
    let precioSinIVA = prod1 + prod2 + prod3;
    let precioConIVA = precioSinIVA * 1.21;
    console.log("El valor total de la compra (IVA incluido) es: " + precioConIVA + "euros");
    console.log("El valor medio del precio con/sin IVA es: " + (precioSinIVA + precioConIVA) / 2 + "euros");

    //9. Crea un programa que lea el nombre de una persona, y a continuación su edad
    //y altura, e imprima todo por pantalla en una misma línea. ¿Funciona?
    console.log("Ejercicio 9: ");
    let nombre1 = prompt("Introduzca su nombre: ");
    let edad1 = prompt("Introduzca su edad");
    let altura1 = prompt("Introduzca su altura: ");
    console.log("Nombre: " + nombre1 + "; Edad: " + edad1 + "; Altura: " + altura1);

    //10. Repita el ejercicio anterior pero leyendo primero los números y después el nombre. ¿Funciona?
    let edad2 = prompt("Introduzca su edad: ");
    let altura2 = prompt("Introduzca su altura: ");
    let nombre2 = prompt("Introduzca su nombre: ");
    console.log("Edad: " + edad2 + "; Altura: " + altura2 + "; Nombre: " + nombre2);*/