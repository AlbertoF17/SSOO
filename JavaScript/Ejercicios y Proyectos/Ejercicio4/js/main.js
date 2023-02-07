//CODED BY AlbertoF17

//Dado el array: const array = ["Joaquin", 1, ["Hola","Adios"], true]
const array = ["Joaquin", 1,["Hola","Adios"], true];
//1) Recorrer el array e insertar dichos valores en el localstorage. El key de cada valor corresponderá a variable + i siendo i el indice en el que se encuentra el array.
for (elemento in array){
    if(typeof(array[elemento] === "object")){
        localStorage.setItem("variable" + elemento, JSON.stringify(array[elemento]));
    }else{
        localStorage.setItem("variable" + elemento, array[elemento]);
    }
}

//2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage.
for (elemento in array){
    console.log(localStorage.getItem("variable" + elemento));
}
//He realizado el console.log para que la petción de la variable se muestre por consola.

//3) Crear un div por cada variable e insertar el valor de dicha variable en el div.
let div1 = document.createElement("DIV");
div1.textContent = localStorage.getItem("variable0");
let div2 = document.createElement("DIV");
div2.textContent = localStorage.getItem("variable1");
let div3 = document.createElement("DIV");
div3.textContent = localStorage.getItem("variable2");
let div4 = document.createElement("DIV");
div4.textContent = localStorage.getItem("variable3");

//4) Insertar estos divs en el body del html.
const body = document.querySelector("body");
body.appendChild(div1);
body.appendChild(div2);
body.appendChild(div3);
body.appendChild(div4);
