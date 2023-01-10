let display = document.querySelector("#ans");
let parentesisAbierto = document.querySelector("#parentesis-abierto");
let parentesisCerrado  = document.querySelector("#parentesis-cerrado");
let letraC = document.querySelector("#C");
let logoCasa = document.querySelector("#casita");
let num7 = document.querySelector("#siete");
let num8 = document.querySelector("#ocho");
let num9 = document.querySelector("#nueve");
let opMult = document.querySelector("#multiplicacion");
let num4 = document.querySelector("#cuatro");
let num5 = document.querySelector("#cinco");
let num6 = document.querySelector("#seis");
let opResta = document.querySelector("#resta");
let num1 = document.querySelector("#uno");
let num2 = document.querySelector("#dos");
let num3 = document.querySelector("#tres");
let opSuma = document.querySelector("#suma");
let opResto = document.querySelector("#resto");
let num0 = document.querySelector("#cero");
let puntoDecimal = document.querySelector("#punto");
let opIgual = document.querySelector("#igual");

parentesisAbierto.onclick = function muestraBoton(){
    display.innerHTML += `(`;
}
parentesisCerrado.onclick = function muestraBoton(){
    display.innerHTML += ')';
}
letraC.onclick = function muestraBoton(){
    display.innerHTML = '';
}
logoCasa.onclick = function muestraBoton(){
    display.innerHTML = '';
}
num7.onclick = function muestraBoton(){
    display.innerHTML += '7';
}
num8.onclick = function muestraBoton(){
    display.innerHTML += '8';
}
num9.onclick = function muestraBoton(){
    display.innerHTML += '9';
}
opMult.onclick = function muestraBoton(){
    display.innerHTML += '*';
}
num4.onclick = function muestraBoton(){
    display.innerHTML += '4';
}
num5.onclick = function muestraBoton(){
    display.innerHTML += '5';
}
num6.onclick = function muestraBoton(){
    display.innerHTML += '6';
}
opResta.onclick = function muestraBoton(){
    display.innerHTML += '-';
}
num1.onclick = function muestraBoton(){
    display.innerHTML += '1';
}
num2.onclick = function muestraBoton(){
    display.innerHTML += '2';
}
num3.onclick = function muestraBoton(){
    display.innerHTML += '3';
}
opSuma.onclick = function muestraBoton(){
    display.innerHTML += '+';
}
opResto.onclick = function muestraBoton(){
    display.innerHTML += '%';
}
num0.onclick = function muestraBoton(){
    display.innerHTML += '0';
}
puntoDecimal.onclick = function muestraBoton(){
    display.innerHTML += '.';
}
opIgual.onclick = function muestraBoton(){
    display.innerHTML += '=';
}