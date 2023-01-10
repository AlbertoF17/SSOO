// //pop-up
// alert("Hola Mundo");

// //Variables
// let nombre = "Alberto";
// var apellido1 = "Fernández"; //NO USAR, JAVASCRIPT ANTIGUO
// const pi = 3.1416; //VALOR INCAMBIABLE
// let n = 1;

// //Mostrar por consola
// console.log("Hola Mundo");
// console.clear();
// console.warn("Estás intentando cambiar el valor de una constante");
// console.error("Esto es un error");

// //Pedir variables STRING
// let x = prompt("Introduce tu nombre: ", "Alberto"); //El segundo parámetro es valor por defecto
// let y = prompt("num1: ");
// let z = prompt("num2: ");
// console.log("num 1 es: " + y + "; num 2 es: " + z + ".")

// //Pedir variables BOOLEANS
// let a = confirm("Es verdadero o falso? ")

// //Pedir variables NUMÉRICAS
// let num1 = Number.parseInt(prompt("Escribe un numero: "));

//Comparador
console.log("1" === 1); //Va a dar FALSE
console.log("1" !== 1); //Va a dar TRUE
console.log("1" == 1); //Va a dar TRUE

//Variables undefined y null
// let nulo = null;
// let indefinido = undefined;
// let undefined;

//Cálculo tiempo
// console.time("tiempo");
// console.timeEnd("tiempo: ")

//Operadores ternarios
//let bool2 = bool ? "bool es verdadero":"bool es falso";

//IF (igual que en JAVA)

//Switch (igual que en JAVA)

//FOR (igual que en JAVA)

//WHILE (igual que en JAVA)

//DO WHILE (igual que en JAVA)

//STRINGS
let str = new String("    Hola    ");
console.log(str.length);
console.log(str.indexOf("o"));
console.log(str.includes("o")); //Método "CONTAINS" de Java
console.log(str.trim);
str = str.trim;
console.log(str.replace("a","o")); //Sólo cambia primera ocurrencia
console.log(str.repalceAll("a","o")); //Cambia todas las ocurrencias
console.log(str.slice(1,2));
console.log(str.split(" ")); //Separa las cadenas y devuelve un array con las cadenas separadas
console.log(str.toUpperCase);
console.log(str.toLowerCase);
let x = 4;
x.toString(); //Convierte número a string

// // Template String
let template = `El número es: ${num1}`;
console.log(template);

//Interactuar con HTML
// let div = document.querySelector("#NombreDeID");
// div.innerHTML = `<p> Hola </p>`;
// alert("Parando la ejecución");
// div.innerHTML = ``;