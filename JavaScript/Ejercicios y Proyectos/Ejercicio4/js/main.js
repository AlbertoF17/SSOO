const array = ["Joaquin", 1,["Hola","Adios"], true];
//1) Recorrer el array e insertar dichos valores en el localstorage. El key de cada valor corresponderá a variable + i siendo i el indice en el que se encuentra el array.
for (elemento in array){
    localStorage.setItem("variable" + elemento, array[elemento]);
}

//2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage.
for (elemento in array){
    localStorage.getItem("variable" + elemento);
}

//3) Crear un div por cada variable e insertar el valor de dicha variable en el div.
for (elemento in array){
    let divNuevo = document.createElement("DIV");
    divNuevo.textContent = localStorage.getItem("variable" + elemento);
}


//4) Insertar estos divs en el body del html.
