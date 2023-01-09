let parentesisAbierto = document.querySelector("#parentesis-abierto");

parentesisAbierto.onclick = function abreParentesis(){
    let display = document.querySelector("#ans");
    display.innerHTML += '(';
};