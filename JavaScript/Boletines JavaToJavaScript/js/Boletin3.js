//BOLETIN 3

//EJERCICIO 1
let realizarEj1 = document.querySelector("#realizar-ej1");
let variable1;
realizarEj1.onclick = function realizarEjercicio() {
    //1. Crea una variable de tipo entero y asígnale el valor 10.
    alert("1. Crea una variable de tipo entero y asígnale el valor 10.");
    let var1 = Number.parseInt(prompt("Inserte el valor:", 10));
    alert("2. Imprímela por pantalla.");
    let ej = document.querySelector("#ej1");
    ej.innerHTML = `<p>${var1}</p>`;
    alert("3. Decrementa su valor una vez.");
    var1--;
    alert("4. Imprímela por pantalla.");
    ej.innerHTML += `<p>${var1}</p>`;
    alert("5. Multiplícalo por dos.")
    var1 *= 2;
    alert("6. Réstale cuatro unidades.")
    var1 -= 4;
    alert("7. Imprímela por pantalla.");
    ej.innerHTML += `<p>${var1}</p>`;
    alert("8. Incrementa su valor cuatro veces usando el operador de incremento (++).");
    var1++;
    var1++;
    var1++;
    var1++;
    alert("9. Imprímela por pantalla.");
    ej.innerHTML += `<p>${var1}</p>`;
    alert("10. Crea una segunda variable y asígnale el resultado de sumar una unidad a la primera.");
    let var2 = var1+1;
    alert("11. Imprime las dos variables.");
    ej.innerHTML += `<p>${var1}</p>` + `<p>${var2}</p>`;
    alert("12. Divide la segunda entre dos.");
    var2 /= 2;
    alert("13. Imprime las dos variables y comprueba si el resultado es el correcto comparando con otros compañeros.");
    ej.innerHTML += `<p>${var1}</p>` + `<p>${var2}</p>`;
}
let borrarEj1 = document.querySelector("#borrar-ej1");
borrarEj1.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej1");
    ej.innerHTML = ``
}

/*

        // EJERCICIO 2
        //Desarrollar un algoritmo para calcular el área de un rectángulo, cuya fórmula es base x altura.
        //Para ello:
        //1. Cree una variable para almacenar el valor de la base, y asigne un valor.
        int base = 3;
        //2. Cree una variable para almacenar el valor de la altura, y asigne un valor.
        int altura = 4;
        //3. Cree una variable para almacenar el área, y utilice la fórmula anterior para asignarle el valor
        //adecuado.
        int area = base*altura;
        //4. Imprima por pantalla el área, utilizando una instrucción println.
        System.out.println(area);
        //5. Tenga en cuenta que debe elegir el tipo adecuado para cada variable.
        //En principio usaré int porque no tengo necesidad de usar números complejos o con decimales.


        //EJERCICIO 3
        //Desarrollar un algoritmo para convertir de euros a dólares teniendo en cuenta que un euro son
        //1.16 dólares. Para ello:
        //1. Cree una variable para almacenar el factor de conversión (1.16).
        float factor = 1.16f;
        //2. Cree una variable para almacenar la cantidad de euros (no asigne ningún valor aún).
        float euros;
        //3. Utilice una instrucción de asignación para darle un valor a la variable anterior.
        euros = 3.99f;
        //4. Cree una variable para almacenar la cantidad de dólares, y asigne el resultado de multiplicar
        //el factor de conversión por la cantidad de euros.
        float dolares = euros*factor;
        //5. Imprima por pantalla el resultado, utilizando una instrucción println.
        System.out.println(euros + " euros, son " + dolares + " dólares");


        //EJERCICIO 4
        //Modifique el ejercicio 2 para ahorrarnos la creación de la variable del área. Para ello:
        //elimine dicha variable, y ponga en la instrucción println la fórmula del área directamente.
        System.out.println(base*altura);


        //EJERCICIO 5
        //Modifique el ejercicio 3 para ahorrarnos la creación de la variable del factor de conversión.
        System.out.println(euros + " euros, son " + euros*1.16 + " dólares");



        //EJERCICIO 6
        //1. Cree una variable de tipo entero y asigne el valor 3.
        int x = 3;
        //2. Decremente su valor tres veces con el operador de decremento (- -).
        x--;
        x--;
        x--;
        //3. Incremente su valor 6 unidades con el operador de suma simplificada (+=).
        x += 6;
        //4. Incremente su valor en una unidad utilizando el operador de incremento (++).
        x++;
        //5. Duplique su valor como desee.
        x *= 2;
        //6. Utilice el operador módulo (%) para comprobar el resto de dividir la variable entre 2,
        //imprimiendo por pantalla el resultado.
        System.out.print("x sera par si el resultado de realizar la operacion x%2 da 0, si no, el resultado sera 1 y por tanto x es impar, en este caso: ");
        System.out.println(x%2);
        //7. ¿Cómo se puede comprobar si un número es par o impar?
        if (x%2 == 0) {
            System.out.println("Por tanto, x es par: " + x);
        }else {
            System.out.println("Por tanto, x es impar: " + x);
        }*/