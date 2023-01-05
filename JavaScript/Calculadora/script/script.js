let display = document.querySelector("#display");

let abreParentesis = document.querySelector("#(");

abreParentesis.onclick = display.innerHTML+=`(`;

let numeroNueve = document.querySelector("#9");
numeroNueve.onclick = display.innerHTML+=`9`;