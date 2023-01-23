// BOLETIN 8

let realizarEj1 = document.querySelector("#realizar-ej1");
realizarEj1.onclick = function realizarEjercicio() {
    alert("1. Lee el código de los bucles y, antes de ejecutarlos, piensa cuántas veces se ejecuta el cuerpo de los mismos, anótalo. Después, ejecuta el código y comprueba si el número de iteraciones coincide con las que has pensado.");
    let ej = document.querySelector("#ej1");
    ej.innerHTML = `<p>int var=0;</p>
                    <p>while(var < 10) {</p>
                    <p>System.out.println(var);</p>
                    <p>var++;</p>
                    <p>}</p>`;
    setTimeout(function() {
        let numItUsuario = Number.parseInt(prompt("¿Cuántas veces se ejecutará este bucle?"));
        if (numItUsuario == 10){
            ej.innerHTML = `<p>CORRECTO</p>`;
        } else {
            ej.innerHTML = `<p>ERROR</p>`;
        }
    }, 500);

    // ej.innerHTML = `<p>for(int i=20; i>=0; i--) {</p>
    //                 <p>System.out.println(i);</p>
    //                 <p>}</p>`;
    // setTimeout(function() {
    //     let numItUsuario = Number.parseInt(prompt("¿Cuántas veces se ejecutará este bucle?"));
    //     if (numItUsuario == 20){
    //         ej.innerHTML = `<p>CORRECTO</p>`;
    //     } else {
    //         ej.innerHTML = `<p>ERROR</p>`;
    //     }
    // }, 1000);
}
let borrarEj1 = document.querySelector("#borrar-ej1");
borrarEj1.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej1");
    ej.innerHTML = ``;
}

// 1. Lee el código de los bucles y, antes de ejecutarlos, piensa cuántas veces se ejecuta el
// cuerpo de los mismos, anotándolo en un papel. Después, ejecuta el código y
// comprueba si el número de iteraciones coincide con las que has pensado.

// for(int i=20; i&gt;=0; i--) {
// System.out.println(i);
// }

// int num=15;
// for(int i=0;i&lt;17;i++) {
// System.out.println(num);
// }

// var=30;
// while(var&gt;=0) {
// System.out.println(var);
// var--;
// }

// for(int i=0; i&lt;10; i+=2) {
// System.out.println(i);
// }

// var=70;
// while(var&gt;=0); {
// var--;
// System.out.println(var);
// }

// for(int i=0; i&lt;10;i+=2) {
// System.out.println(i);
// i++;
// }

// 2. Traduce cada bucle for a su correspondiente while, y cada while a su for.
// 3. Modifica el código para que cada bucle cuente las iteraciones y, una vez haya
// terminado cada bucle, se imprima el número de iteraciones.

// 4. Crea un programa que lea un número, e imprima en una misma línea tantos ceros
// como diga el número. Por ejemplo: si se lee el 3 debe imprimirse:
// 0 0 0
// 5. Modifica el ejercicio 4 para que la primera columna siempre imprima un 1. Por
// ejemplo, si se lee el 3 debe imprimirse:
// 1 0 0
// 6. Modifica el ejercicio 4 para que la última columna siempre imprima un 1. Por ejemplo,
// si se lee el 3 debe imprimirse:
// 0 0 1
// 7. Modifica el ejercicio 4 para que la columna central (o la más cercana en caso de no
// haber central) siempre imprima un 1. Por ejemplo, si se lee el 3 debe imprimirse:
// 0 1 0
// 8. Crea un programa que lea un número, y repita el ejercicio 4 tantas veces como diga
// ese número. Por ejemplo: si se lee el 3 debe imprimirse:
// 0 0 0
// 0 0 0
// 0 0 0
// 9. Modifica el ejercicio 8 para que la primera línea siempre imprima unos. Por ejemplo, si
// se lee el 3 debe imprimirse:
// 1 1 1
// 0 0 0
// 0 0 0
// 10. Modifica el ejercicio 8 para que la primera columna siempre imprima unos. Por
// ejemplo, si se lee el 3 debe imprimirse:
// 1 0 0
// 1 0 0
// 1 0 0
// 11. Modifica el ejercicio 8 para que la última línea siempre imprima unos. Por ejemplo, si
// se lee el 3 debe imprimirse:
// 0 0 0
// 0 0 0
// 1 1 1
// 12. Modifica el ejercicio 8 para que la última columna siempre imprima unos. Por ejemplo,
// si se lee el 3 debe imprimirse:
// 0 0 1
// 0 0 1
// 0 0 1

// 13. Modifica el ejercicio 8 para que la primera fila y columna siempre imprima unos. Por
// ejemplo, si se lee el 3 debe imprimirse:
// 1 1 1
// 1 0 0
// 1 0 0
// 14. Modifica el ejercicio 8 para que la diagonal siempre imprima unos. Por ejemplo, si se
// lee el 3 debe imprimirse:
// 0 0 1
// 0 0 1
// 1 1 1
// 15. Modifica el ejercicio 8 para que el marco siempre imprima unos. Por ejemplo, si se lee
// el 3 debe imprimirse:
// 1 1 1
// 1 0 1
// 1 1 1
// 16. Modifica el ejercicio 8 para que la diagonal principal siempre imprima unos. Por
// ejemplo, si se lee el 3 debe imprimirse:
// 1 0 0
// 0 1 0
// 0 0 1
// 17. Leer dos enteros e imprimir una tabla o matriz de tantas filas y columnas como los
// números leídos. La tabla o matriz solo debe contener ceros. Por ejemplo si se leen el 2
// y 4, se imprimiría:
// 0 0 0 0
// 0 0 0 0
// 18. Modificar el ejercicio anterior para que contenga la sucesión 1,2,3,4,…, etc, con tantos
// términos como posiciones tenga la tabla o matriz. Para el caso del ejercicio anterior, se
// imprimiría:
// 1 2 3 4
// 5 6 7 8
// 19. Crea un programa que lea un número e imprima dicho número por pantalla siete
// veces. Por ejemplo, si se lee el 6, debe imprimirse:
// 6
// 6
// 6
// 6
// 6
// 6
// 6

// 20. Modifica el programa para que el número se imprima tantas veces como diga el propio
// número. Por ejemplo si se lee el 4, debe imprimirse:
// 4
// 4
// 4
// 4
// 21. Modifica el ejercicio anterior, para que además del número se lea un carácter, y se
// imprima dicho carácter tantas veces como diga el número. Por ejemplo, si se lee 3 y
// ‘A’, debe imprimirse:
// A
// A
// A
// 22. Crea un programa que lea un número, e imprima por pantalla los primeros números
// positivos. Por ejemplo, si se lee el 5 debe imprimirse:
// 1
// 2
// 3
// 4
// 5
// 23. Modifica el ejercicio anterior para que se imprima todo en la misma línea.
// 24. Crea un programa que lea un número, e imprima por pantalla los primeros números
// pares. Por ejemplo, si se lee el 5 debe imprimirse:
// 2
// 4
// 6
// 8
// 10
// 25. Modifica el ejercicio anterior para que imprima los primeros números impares.
// 26. Modifica los dos anteriores para que todo se imprima en la misma línea, pero
// separando los números por coma en lugar de espacios en blanco.