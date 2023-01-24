// BOLETIN 8

// let realizarEj1 = document.querySelector("#realizar-ej1");
// realizarEj1.onclick = function realizarEjercicio() {
//     alert("1. Lee el código de los bucles y, antes de ejecutarlos, piensa cuántas veces se ejecuta el cuerpo de los mismos, anótalo. Después, ejecuta el código y comprueba si el número de iteraciones coincide con las que has pensado.");
//     let ej = document.querySelector("#ej1");
//     ej.innerHTML = `<p>int var=0;</p>
//                     <p>while(var < 10) {</p>
//                     <p>System.out.println(var);</p>
//                     <p>var++;</p>
//                     <p>}</p>`;
//     setTimeout(function() {
//         let numItUsuario = Number.parseInt(prompt("¿Cuántas veces se ejecutará este bucle?"));
//         if (numItUsuario == 10){
//             ej.innerHTML = `<p>CORRECTO</p>`;
//         } else {
//             ej.innerHTML = `<p>ERROR</p>`;
//         }
//     }, 500);

//     ej.innerHTML = `<p>for(int i=20; i>=0; i--) {</p>
//                     <p>System.out.println(i);</p>
//                     <p>}</p>`;
//     setTimeout(function() {
//         let numItUsuario = Number.parseInt(prompt("¿Cuántas veces se ejecutará este bucle?"));
//         if (numItUsuario == 20){
//             ej.innerHTML = `<p>CORRECTO</p>`;
//         } else {
//             ej.innerHTML = `<p>ERROR</p>`;
//         }
//     }, 1000);
// }
// let borrarEj1 = document.querySelector("#borrar-ej1");
// borrarEj1.onclick = function borrarEjercicio() {
//     let ej = document.querySelector("#ej1");
//     ej.innerHTML = ``;
// }

// //1. Lee el código de los bucles y, antes de ejecutarlos, piensa cuántas veces se ejecuta el
//         //cuerpo de los mismos, anotándolo en un papel. Después, ejecuta el código y
//         //comprueba si el número de iteraciones coincide con las que has pensado.
//         System.out.println("\nEJERCICIO 1");
//         System.out.println("*****************************");
//         System.out.println("10 iteraciones");
//         int cont1A = 0;
//         int var=0;
//         while(var < 10) {
//             System.out.println(var);
//             var++;
//             cont1A++;
//         }
//         System.out.println("Iteraciones reales: "+cont1A);

//         //
//         System.out.println("*****************************");
//         System.out.println("21 iteraciones");
//         int cont2A = 0;
//         for(int i=20; i >= 0; i--) {
//             System.out.println(i);
//             cont2A++;
//         }
//         System.out.println("Iteraciones reales: "+cont2A);

//         //
//         System.out.println("*****************************");
//         System.out.println("17 iteraciones");
//         int cont3A = 0;
//         int num1=15;
//         for(int i=0;i<17;i++) {
//             System.out.println(num1);
//             cont3A++;
//         }
//         System.out.println("Iteraciones reales: "+cont3A);

//         //
//         System.out.println("*****************************");
//         System.out.println("31 iteraciones");
//         int var1=30;
//         int cont4A = 0;
//         while(var1>=0) {
//             System.out.println(var1);
//             var1--;
//             cont4A++;
//         }
//         System.out.println("Iteraciones reales: "+cont4A);

//         //
//         System.out.println("*****************************");
//         System.out.println("5 iteraciones");
//         int cont5A = 0;
//         for(int i=0; i<10; i+=2) {
//             System.out.println(i);
//             cont5A++;
//         }
//         System.out.println("Iteraciones reales: "+cont5A);

//         //
//         System.out.println("*****************************");
//         System.out.println("71 iteraciones");
//         int cont6A = 0;
//         int var2=70;
//         while(var2>=0){
//             var2--;
//             System.out.println(var2);
//             cont6A++;
//         }
//         System.out.println("Iteraciones reales: "+cont6A);

//         //
//         System.out.println("*****************************");
//         System.out.println("4 iteraciones");
//         int cont7 = 0;
//         for(int i=0; i<10;i+=2) {
//             System.out.println(i);
//             i++;
//             cont7++;
//         }
//         System.out.println("Iteraciones reales: "+cont7);

//         //

//         //2. Traduce cada bucle for a su correspondiente while, y cada while a su for.
//         System.out.println("\nEJERCICIO 2");
//         System.out.println("*****************************");
//         System.out.println("10 iteraciones");
//         int cont1 = 0;
//         for (int var3=0; var3<10; var3++, cont1++) {
//             System.out.println(var3);
//             var3++;
//             cont1++;
//         }
//         System.out.println("Iteraciones reales: "+ cont1);

//         //
//         System.out.println("*****************************");
//         System.out.println("17 iteraciones");
//         int cont3 = 0;
//         int num2=15;
//         for(int i=0;i<17;i++) {
//             System.out.println(num2);
//             cont3++;
//         }
//         System.out.println("Iteraciones reales: "+cont3);

//         //
//         System.out.println("*****************************");
//         System.out.println("21 iteraciones");
//         int cont2 = 0;
//         int i=20;
//         while (i >= 0){
//             System.out.println(i);
//             i--;
//             cont2++;
//         }
//         System.out.println("Iteraciones reales: "+cont2);

//         //
//         System.out.println("*****************************");
//         System.out.println("31 iteraciones");

//         int cont4 = 0;
//         for(int var4=30; var4>=0; var4--, cont4++) {
//             System.out.println(var4);
//         }
//         System.out.println("Iteraciones reales: "+cont4);

//         //
//         System.out.println("*****************************");
//         System.out.println("5 iteraciones");
//         int cont5 = 0;
//         int b=0;
//         while(b<10) {
//             System.out.println(cont5);
//             b+=2;
//             cont5++;
//         }
//         System.out.println("Iteraciones reales: "+cont5);

//         //
//         System.out.println("*****************************");
//         System.out.println("71 iteraciones");
//         int cont6 = 0;
//         for(int c=70; c>=0; c--, cont6++) {
//             System.out.println(c);
//         }
//         System.out.println("Iteraciones reales: "+cont6);

//         //
//         System.out.println("*****************************");
//         System.out.println("4 iteraciones");
//         int cont8 = 0;
//         int j=0;
//         while(j<10) {
//             System.out.println(j);
//             j+=2;
//             j++;
//             cont8++;
//         }
//         System.out.println("Iteraciones reales: "+cont8);
//         System.out.println("*****************************");
//         //

//         //3. Modifica el código para que cada bucle cuente las iteraciones y, una vez haya
//         //terminado cada bucle, se imprima el número de iteraciones.
//         System.out.println("\nEJERCICIO 3 YA REALIZADO EN EL CÓDIGO DE LOS EJERCICIOS");
//         //4. Crea un programa que lea un número, e imprima en una misma línea tantos ceros
//         //como diga el número. Por ejemplo: si se lee el 3 debe imprimirse:
//         //0 0 0
//         System.out.println("\nEJERCICIO 4");
//         System.out.print("Indica en numero de ceros que desee: ");
//         int veces1 = sc.nextInt();
//         while (veces1>0) {
//             System.out.print("0 ");
//             veces1--;
//         }

//         //5. Modifica el ejercicio 4 para que la primera columna siempre imprima un 1. Por
//         //ejemplo, si se lee el 3 debe imprimirse:
//         //1 0 0
//         System.out.println("\nEJERCICIO 5");
//         System.out.print("Indica en numero de columnas que desee: ");
//         int veces2 = sc.nextInt();
//         int col1 = veces2;
//         while (veces2>0) {
//             if (veces2==col1){
//                 System.out.print("1 ");
//             } else {
//                 System.out.print("0 ");
//             }
//             veces2--;
//         }

//         //6. Modifica el ejercicio 4 para que la última columna siempre imprima un 1. Por ejemplo,
//         //si se lee el 3 debe imprimirse:
//         //0 0 1
//         System.out.println("\nEJERCICIO 6");
//         System.out.print("Indica en numero de columnas que desee (parte 2): ");
//         int veces3 = sc.nextInt();
//         while (veces3>0) {
//             if (veces3==1){
//                 System.out.print("1 ");
//             } else {
//                 System.out.print("0 ");
//             }
//             veces3--;
//         }

//         //7. Modifica el ejercicio 4 para que la columna central (o la más cercana en caso de no
//         //haber central) siempre imprima un 1. Por ejemplo, si se lee el 3 debe imprimirse:
//         //0 1 0
//         System.out.println("\nEJERCICIO 7");
//         System.out.print("Indica en numero de columnas que desee (parte 3): ");
//         int veces4 = sc.nextInt();
//         int col2 = veces4;
//         while (veces4>0) {
//             if ((veces4-1)==col2/2){
//                 System.out.print("1 ");
//             } else {
//                 System.out.print("0 ");
//             }
//             veces4--;
//         }

//         //8. Crea un programa que lea un número, y repita el ejercicio 4 tantas veces como diga
//         //ese número. Por ejemplo: si se lee el 3 debe imprimirse:
//         //0 0 0
//         //0 0 0
//         //0 0 0
//         //
//         //int rep = sc.nextInt();
//         System.out.println("\nEJERCICIO 8");
//         System.out.print("Indica el numero de columnas que desee: ");
//         int veces5 = sc.nextInt();
//         int repetidor1 = veces5;
//         System.out.print("Indica el numero de filas que desee: ");
//         for(int rep = sc.nextInt(); rep>0; rep--) {
//             while (veces5>0) {
//                 System.out.print("0 ");
//                 veces5--;
//             }
//             System.out.println();
//             veces5=repetidor1;
//         }

//         //9. Modifica el ejercicio 8 para que la primera línea siempre imprima unos. Por ejemplo, si
//         //se lee el 3 debe imprimirse:
//         //1 1 1
//         //0 0 0
//         //0 0 0
//         System.out.println("\nEJERCICIO 9");
//         System.out.print("Indica el numero de columnas que desee: ");
//         int veces6 = sc.nextInt();
//         int repetidor2 = veces6;
//         System.out.print("Indica el numero de filas que desee: ");
//         for(int rep = sc.nextInt(), reset=rep; rep>0; rep--) {
//             while (veces6>0) {
//                 if (reset==rep) {
//                     System.out.print("1 ");
//                 } else {
//                     System.out.print("0 ");
//                 }
//                 veces6--;
//             }
//             System.out.println();
//             veces6=repetidor2;
//         }

//         //10. Modifica el ejercicio 8 para que la primera columna siempre imprima unos. Por
//         //ejemplo, si se lee el 3 debe imprimirse:
//         //1 0 0
//         //1 0 0
//         //1 0 0
//         System.out.println("\nEJERCICIO 10");
//         System.out.print("Indica el numero de columnas que desee: ");
//         int veces7 = sc.nextInt();
//         int repetidor3 = veces7;
//         System.out.print("Indica el numero de filas que desee: ");
//         for(int rep = sc.nextInt(); rep>0; rep--) {
//             while (veces7>0) {
//                 if (veces7==repetidor3){
//                     System.out.print("1 ");
//                 } else {
//                     System.out.print("0 ");
//                 }
//                 veces7--;
//             }
//             System.out.println();
//             veces7=repetidor3;
//         }

//         //11. Modifica el ejercicio 8 para que la última línea siempre imprima unos. Por ejemplo, si
//         //se lee el 3 debe imprimirse:
//         //0 0 0
//         //0 0 0
//         //1 1 1
//         System.out.println("\nEJERCICIO 11");
//         System.out.print("Indica el numero de columnas que desee: ");
//         int veces8 = sc.nextInt();
//         int repetidor4 = veces8;
//         System.out.print("Indica el numero de filas que desee: ");
//         for(int rep = sc.nextInt(); rep>0; rep--) {
//             while (veces8>0) {
//                 if (rep==1) {
//                     System.out.print("1 ");
//                 } else {
//                     System.out.print("0 ");
//                 }
//                 veces8--;
//             }
//             System.out.println();
//             veces8=repetidor4;
//         }
//         //12. Modifica el ejercicio 8 para que la última columna siempre imprima unos. Por ejemplo,
//         //si se lee el 3 debe imprimirse:
//         //0 0 1
//         //0 0 1
//         //0 0 1
//         System.out.println("\nEJERCICIO 12");
//         System.out.print("Indica el numero de columnas que desee: ");
//         int veces9 = sc.nextInt();
//         int repetidor5 = veces9;
//         System.out.print("Indica el numero de filas que desee: ");
//         for(int rep = sc.nextInt(); rep>0; rep--) {
//             while (veces9>0) {
//                 if (veces9==1){
//                     System.out.print("1 ");
//                 } else {
//                     System.out.print("0 ");
//                 }
//                 veces9--;
//             }
//             System.out.println();
//             veces9=repetidor5;
//         }

//         //13. Modifica el ejercicio 8 para que la primera fila y columna siempre imprima unos. Por
//         //ejemplo, si se lee el 3 debe imprimirse:
//         //1 1 1
//         //1 0 0
//         //1 0 0
//         System.out.println("\nEJERCICIO 13");
//         System.out.print("Indique el numero de columnas que desee: ");
//         int veces10 = sc.nextInt();
//         int repetidor6 = veces10;
//         System.out.print("Indique el numero de filas que desee: ");
//         for(int rep = sc.nextInt(), reset=rep; rep>0; rep--) {
//             while (veces10>0) {
//                 if (reset==rep) {
//                     System.out.print("1 ");
//                 } else if (veces10==repetidor6){
//                     System.out.print("1 ");
//                 } else {
//                     System.out.print("0 ");
//                 }
//                 veces10--;
//             }
//             System.out.println();
//             veces10=repetidor6;
//         }

//         //14. Modifica el ejercicio 8 para que la diagonal siempre imprima unos. Por ejemplo, si se
//         //lee el 3 debe imprimirse:
//         //0 0 1
//         //0 0 1
//         //1 1 1
//         System.out.println("\nEJERCICIO 14");
//         System.out.print("Indique el numero de columnas que desee: ");
//         int veces11 = sc.nextInt();
//         int repetidor7 = veces11;
//         System.out.print("Indique el numero de filas que desee: ");
//         for(int rep = sc.nextInt(); rep>0; rep--) {
//             while (veces11>0) {
//                 if (rep==1) {
//                     System.out.print("1 ");
//                 } else if (veces11==1){
//                     System.out.print("1 ");
//                 } else {
//                     System.out.print("0 ");
//                 }
//                 veces11--;
//             }
//             System.out.println();
//             veces11=repetidor7;
//         }

//         //15. Modifica el ejercicio 8 para que el marco siempre imprima unos. Por ejemplo, si se lee
//         //el 3 debe imprimirse:
//         //1 1 1
//         //1 0 1
//         //1 1 1
//         System.out.println("\nEJERCICIO 15");
//         System.out.print("Indique el numero de columnas que desee: ");
//         int veces12 = sc.nextInt();
//         int repetidor8 = veces12;
//         System.out.print("Indique el numero de filas que desee: ");
//         for(int rep = sc.nextInt(); rep>0; rep--) {
//             while (veces12>0) {
//                 if (rep == 1 || veces12 == 1 || veces12 == repetidor8 || rep==repetidor8) {
//                     System.out.print("1 ");
//                 }else {
//                     System.out.print("0 ");
//                 }
//                 veces12--;
//             }
//             System.out.println();
//             veces12=repetidor8;
//         }

//         //16. Modifica el ejercicio 8 para que la diagonal principal siempre imprima unos. Por
//         //ejemplo, si se lee el 3 debe imprimirse:
//         //1 0 0
//         //0 1 0
//         //0 0 1
//         System.out.println("\nEJERCICIO 16");
//         System.out.print("Indica en numero de filas que desee: ");
//         int veces13 = sc.nextInt();
//         int repetidor9 = veces13;
//         int fila = 0;
//         int col = 0;
//         System.out.print("Indica en numero de columnas que desee: ");
//         for(int rep = sc.nextInt(); rep>0; rep--) {
//             while (veces13>0) {
//                 if (fila==col) {
//                     System.out.print("1 ");
//                 } else {
//                     System.out.print("0 ");
//                 }
//                 veces13--;
//                 col++;
//             }
//             fila++;
//             col = 0;
//             System.out.println();
//             veces13=repetidor9;
//         }

//         //17. Leer dos enteros e imprimir una tabla o matriz de tantas filas y columnas como los
//         //números leídos. La tabla o matriz solo debe contener ceros. Por ejemplo si se leen el 2 y 4, se imprimiría:
//         //0 0 0 0
//         //0 0 0 0
//         System.out.println("\nEJERCICIO 17");
//         System.out.print("Indica en numero de columnas que desee: ");
//         int veces14 = sc.nextInt();
//         int repetidor10 = veces14;
//         System.out.print("Numero de filas que desee: ");
//         for(int rep = sc.nextInt(); rep>0; rep--) {
//             while (veces14 > 0) {
//                 System.out.print("0 ");
//                 veces14--;
//             }
//             System.out.println();
//             veces14 = repetidor10;
//         }

//         //18. Modificar el ejercicio anterior para que contenga la sucesión 1,2,3,4,…, etc, con tantos
//         //términos como posiciones tenga la tabla o matriz. Para el caso del ejercicio anterior, se
//         //imprimiría:
//         //1 2 3 4
//         //5 6 7 8
//         System.out.println("\nEJERCICIO 18");
//         System.out.print("Indica en numero de columnas que desee: ");
//         int veces15 = sc.nextInt();
//         int repetidor11 = veces15;
//         System.out.print("Numero de filas que desee: ");
//         for(int rep = sc.nextInt(), num=1; rep>0; rep--) {
//             while (veces15>0) {
//                 System.out.print(num + " ");
//                 num++;
//                 veces15--;
//             }
//             System.out.println();
//             veces15=repetidor11;
//         }

//         //19. Crea un programa que lea un número e imprima dicho número por pantalla siete
//         //veces. Por ejemplo, si se lee el 6, debe imprimirse:
//         //6
//         //6
//         //6
//         //6
//         //6
//         //6
//         //6
//         System.out.println("\nEJERCICIO 19");
//         System.out.print("Escriba un numero: ");
//         for (int num3 = sc.nextInt(), cont = 0; cont<7; cont++){
//             System.out.println(num3);
//         }

// for(int i=20; i>=0; i--) {
// System.out.println(i);
// }

// int num=15;
// for(int i=0;i<17;i++) {
// System.out.println(num);
// }

// var=30;
// while(var>=0) {
// System.out.println(var);
// var--;
// }

// for(int i=0; i<10; i+=2) {
// System.out.println(i);
// }

// var=70;
// while(var>=0); {
// var--;
// System.out.println(var);
// }

// for(int i=0; i<10;i+=2) {
// System.out.println(i);
// i++;
// }

// let realizarEj2 = document.querySelector("#realizar-ej2");
// realizarEj2.onclick = function realizarEjercicio() {
//     alert("2. Traduce cada bucle for a su correspondiente while, y cada while a su for.");
//     let ej = document.querySelector("#ej2");
//     ej.innerHTML = ``;


// }
// let borrarEj2 = document.querySelector("#borrar-ej2");
// borrarEj2.onclick = function borrarEjercicio() {
//     let ej = document.querySelector("#ej2");
//     ej.innerHTML = ``;
// }

let realizarEj3 = document.querySelector("#realizar-ej3");
realizarEj3.onclick = function realizarEjercicio() {
    alert("3. Modifica el código para que cada bucle cuente las iteraciones y, una vez haya terminado cada bucle, se imprima el número de iteraciones.");
    let ej = document.querySelector("#ej3");
    //Bucle 1
    let variable1 = 0;
    while(variable1 < 10) {
    variable1++;
    };
    ej.innerHTML = `<p>Bucle 1: ${variable1} iteraciones</p>`;
    //Bucle 2
    let variable2 = 0;
    for(let i=20; i>=0; i--) {
        variable2++;
    };
    ej.innerHTML += `<p>Bucle 2: ${variable2} iteraciones</p>`;
    //Bucle 3
    let variable3 = 15;
    for(let i=0;i<17;i++) {
    variable3++;
    }
    ej.innerHTML += `<p>Bucle 3: ${variable3} iteraciones</p>`;
    //Bucle 4
    let variable4a = 30;
    let variable4b = 0;
    while(variable4a>=0) {
    variable4b++;
    variable4a--;
    }
    ej.innerHTML += `<p>Bucle 4: ${variable4b} iteraciones</p>`;
    //Bucle 5
    let variable5 = 0;
    for(let i=0; i<10; i+=2) {
        variable5++;
    }
    ej.innerHTML += `<p>Bucle 5: ${variable5} iteraciones</p>`;
    //Bucle 6
    let variable6a = 70;
    let variable6b = 0
    while(variable6a>=0); {
    variable6a--;
    variable6b++;
    }
    ej.innerHTML += `<p>Bucle 6: ${variable6b} iteraciones</p>`;
    //Bucle 7
    let variable7 = 0;
    for(let i=0; i<10;i+=2) {
        variable7++;
        i++;
    }
    ej.innerHTML += `<p>Bucle 7: ${variable7} iteraciones</p>`;
}
let borrarEj3 = document.querySelector("#borrar-ej3");
borrarEj3.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej3");
    ej.innerHTML = ``;
}

//         //25. Modifica el ejercicio anterior para que imprima los primeros números impares.
//         System.out.println("\nEJERCICIO 25");
//         System.out.print("Escriba un numero: ");
//         for (int num7 = sc.nextInt(), cont = 0, veces=0; cont<num7; cont++, veces+=2){
//             System.out.println(veces+1);
//         }

let realizarEj4 = document.querySelector("#realizar-ej4");
realizarEj4.onclick = function realizarEjercicio() {
    alert("4. Crea un programa que lea un número, e imprima en una misma línea tantos ceros como diga el número.");
    let ej = document.querySelector("#ej4");
    let numCeros = Number.parseInt(prompt("¿Cuántos 0s se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for (let i = 0; i<numCeros; i++){
        ej.innerHTML += `0 `;
    }
    ej.innerHTML += `</p>`;
}
let borrarEj4 = document.querySelector("#borrar-ej4");
borrarEj4.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej4");
    ej.innerHTML = ``;
}

let realizarEj5 = document.querySelector("#realizar-ej5");
realizarEj5.onclick = function realizarEjercicio() {
    alert("5. Modifica el ejercicio 4 para que la primera columna siempre imprima un 1.");
    let ej = document.querySelector("#ej5");
    let numCeros = Number.parseInt(prompt("¿Cuántos 0s se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for (let i = 0; i<numCeros; i++){
        if (i==0){
            ej.innerHTML += `1 `;
        } else {
            ej.innerHTML += `0 `;
        }
        
    }
    ej.innerHTML += `</p>`;
}
let borrarEj5 = document.querySelector("#borrar-ej5");
borrarEj5.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej5");
    ej.innerHTML = ``;
}

let realizarEj6 = document.querySelector("#realizar-ej6");
realizarEj6.onclick = function realizarEjercicio() {
    alert("6. Modifica el ejercicio 4 para que la última columna siempre imprima un 1.");
    let ej = document.querySelector("#ej6");
    let numCeros = Number.parseInt(prompt("¿Cuántos 0s se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for (let i = 0; i<numCeros; i++){
        if (i==(numCeros-1)){
            ej.innerHTML += `1 `;
        } else {
            ej.innerHTML += `0 `;
        }
        
    }
    ej.innerHTML += `</p>`;
}
let borrarEj6 = document.querySelector("#borrar-ej6");
borrarEj6.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej6");
    ej.innerHTML = ``;
}

let realizarEj7 = document.querySelector("#realizar-ej7");
realizarEj7.onclick = function realizarEjercicio() {
    alert("7. Modifica el ejercicio 4 para que la columna central (o la más cercana en caso de no haber central) siempre imprima un 1.");
    let ej = document.querySelector("#ej7");
    let numCeros = Number.parseInt(prompt("¿Cuántos 0s se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for (let i = 0; i<numCeros; i++){
        if (i==(Math.floor(numCeros/2))){
            ej.innerHTML += `1 `;
        } else {
            ej.innerHTML += `0 `;
        }
        
    }
    ej.innerHTML += `</p>`;
}
let borrarEj7 = document.querySelector("#borrar-ej7");
borrarEj7.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej7");
    ej.innerHTML = ``;
}

let realizarEj8 = document.querySelector("#realizar-ej8");
realizarEj8.onclick = function realizarEjercicio() {
    alert("8. Crea un programa que lea un número, y repita el ejercicio 4 tantas veces como diga ese número.");
    let ej = document.querySelector("#ej8");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            ej.innerHTML += `0 `;
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj8 = document.querySelector("#borrar-ej8");
borrarEj8.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej8");
    ej.innerHTML = ``;
}

let realizarEj9 = document.querySelector("#realizar-ej9");
realizarEj9.onclick = function realizarEjercicio() {
    alert("9. Modifica el ejercicio 8 para que la primera fila siempre imprima unos.");
    let ej = document.querySelector("#ej9");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == 0){
                ej.innerHTML += `1 `;
            } else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj9 = document.querySelector("#borrar-ej9");
borrarEj9.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej9");
    ej.innerHTML = ``;
}

let realizarEj10 = document.querySelector("#realizar-ej10");
realizarEj10.onclick = function realizarEjercicio() {
    alert("10. Modifica el ejercicio 8 para que la primera columna siempre imprima unos.");
    let ej = document.querySelector("#ej10");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (j == 0){
                ej.innerHTML += `1 `;
            } else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj10 = document.querySelector("#borrar-ej10");
borrarEj10.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej10");
    ej.innerHTML = ``;
}

let realizarEj11 = document.querySelector("#realizar-ej11");
realizarEj11.onclick = function realizarEjercicio() {
    alert("11. Modifica el ejercicio 8 para que la última línea siempre imprima unos.");
    let ej = document.querySelector("#ej11");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == numFilas-1){
                ej.innerHTML += `1 `;
            } else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj11 = document.querySelector("#borrar-ej11");
borrarEj11.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej11");
    ej.innerHTML = ``;
}

let realizarEj12 = document.querySelector("#realizar-ej12");
realizarEj12.onclick = function realizarEjercicio() {
    alert("12. Modifica el ejercicio 8 para que la última columna siempre imprima unos.");
    let ej = document.querySelector("#ej12");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (j == numColumnas-1){
                ej.innerHTML += `1 `;
            } else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj12 = document.querySelector("#borrar-ej12");
borrarEj12.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej12");
    ej.innerHTML = ``;
}

let realizarEj13 = document.querySelector("#realizar-ej13");
realizarEj13.onclick = function realizarEjercicio() {
    alert("13. Modifica el ejercicio 8 para que la primera fila y columna siempre imprima unos.");
    let ej = document.querySelector("#ej13");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == 0 || j == 0){
                ej.innerHTML += `1 `;
            }else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj13 = document.querySelector("#borrar-ej13");
borrarEj13.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej13");
    ej.innerHTML = ``;
}

let realizarEj14 = document.querySelector("#realizar-ej14");
realizarEj14.onclick = function realizarEjercicio() {
    alert("14. Modifica el ejercicio 8 para que la diagonal siempre imprima unos.");
    let ej = document.querySelector("#ej14");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == numFilas-1 || j == numColumnas-1){
                ej.innerHTML += `1 `;
            }else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj14 = document.querySelector("#borrar-ej14");
borrarEj14.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej14");
    ej.innerHTML = ``;
}

let realizarEj15 = document.querySelector("#realizar-ej15");
realizarEj15.onclick = function realizarEjercicio() {
    alert("15. Modifica el ejercicio 8 para que el marco siempre imprima unos.");
    let ej = document.querySelector("#ej15");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == 0 || j == 0 || i == numFilas-1 || j == numColumnas-1){
                ej.innerHTML += `1 `;
            }else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj15 = document.querySelector("#borrar-ej15");
borrarEj15.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej15");
    ej.innerHTML = ``;
}

let realizarEj16 = document.querySelector("#realizar-ej16");
realizarEj16.onclick = function realizarEjercicio() {
    alert("16. Modifica el ejercicio 8 para que la diagonal principal siempre imprima unos.");
    let ej = document.querySelector("#ej16");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            if (i == j){
                ej.innerHTML += `1 `;
            }else {
                ej.innerHTML += `0 `;
            }
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj16 = document.querySelector("#borrar-ej16");
borrarEj16.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej16");
    ej.innerHTML = ``;
}

let realizarEj17 = document.querySelector("#realizar-ej17");
realizarEj17.onclick = function realizarEjercicio() {
    alert("17. Leer dos enteros e imprimir una tabla o matriz de tantas filas y columnas como los números leídos. La tabla o matriz solo debe contener ceros.");
    let ej = document.querySelector("#ej17");
    ej.innerHTML = `<p>Realizado en el ejercicio 8</p>`;
}
let borrarEj17 = document.querySelector("#borrar-ej17");
borrarEj17.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej17");
    ej.innerHTML = ``;
}

let realizarEj18 = document.querySelector("#realizar-ej18");
realizarEj18.onclick = function realizarEjercicio() {
    alert("18. Modificar el ejercicio anterior para que contenga la sucesión 1,2,3,4,…, etc, con tantos términos como posiciones tenga la tabla o matriz.");
    let ej = document.querySelector("#ej18");
    let numColumnas = Number.parseInt(prompt("¿Cuántas columnas se deben imprimir?"));
    let numFilas = Number.parseInt(prompt("¿Cuántas filas se deben imprimir?"));
    let contador = 1;
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<numFilas; i++){
        for (let j = 0; j<numColumnas; j++){
            ej.innerHTML += `${contador} `;
            contador++;
        }
        ej.innerHTML += `</p>`;
    }
}
let borrarEj18 = document.querySelector("#borrar-ej18");
borrarEj18.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej18");
    ej.innerHTML = ``;
}

let realizarEj19 = document.querySelector("#realizar-ej19");
realizarEj19.onclick = function realizarEjercicio() {
    alert("19. Crea un programa que lea un número e imprima dicho número por pantalla siete veces.");
    let ej = document.querySelector("#ej19");
    let num = Number.parseInt(prompt("¿Qué número desea imprimir?"));
    for(let i = 0 ; i<7; i++){
        ej.innerHTML += `<p>${num}</p>`;    
    }
}
let borrarEj19 = document.querySelector("#borrar-ej19");
borrarEj19.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej19");
    ej.innerHTML = ``;
}

let realizarEj20 = document.querySelector("#realizar-ej20");
realizarEj20.onclick = function realizarEjercicio() {
    alert("20. Modifica el programa para que el número se imprima tantas veces como diga el propio número.");
    let ej = document.querySelector("#ej20");
    ej.innerHTML = ``;
    let num = Number.parseInt(prompt("¿Qué número desea imprimir?"));
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `<p>${num}</p>`;    
    }
}
let borrarEj20 = document.querySelector("#borrar-ej20");
borrarEj20.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej20");
    ej.innerHTML = ``;
}

let realizarEj21 = document.querySelector("#realizar-ej21");
realizarEj21.onclick = function realizarEjercicio() {
    alert("21. Modifica el programa para que se imprima un carácter leido por teclado tantas veces como diga el propio número.");
    let ej = document.querySelector("#ej21");
    ej.innerHTML = ``;
    let carac = prompt("¿Qué caracter desea imprimir?")
    let num = Number.parseInt(prompt("¿Cuántas veces desea que se imprima?"));
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `<p>${carac}</p>`;    
    }
}
let borrarEj21 = document.querySelector("#borrar-ej21");
borrarEj21.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej21");
    ej.innerHTML = ``;
}

let realizarEj22 = document.querySelector("#realizar-ej22");
realizarEj22.onclick = function realizarEjercicio() {
    alert("22. Crea un programa que lea un número, e imprima por pantalla los primeros números positivos.");
    let ej = document.querySelector("#ej22");
    ej.innerHTML = ``;
    let num = Number.parseInt(prompt("¿Cuántos números desea imprimir?"));
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `<p>${i+1}</p>`;    
    }
}
let borrarEj22 = document.querySelector("#borrar-ej22");
borrarEj22.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej22");
    ej.innerHTML = ``;
}

let realizarEj23 = document.querySelector("#realizar-ej23");
realizarEj23.onclick = function realizarEjercicio() {
    alert("23. Modifica el ejercicio anterior para que se imprima todo en la misma línea.");
    let ej = document.querySelector("#ej23");
    let num = Number.parseInt(prompt("¿Cuántos números desea imprimir?"));
    ej.innerHTML = `<p>`;
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `${i+1} `;    
    }
    ej.innerHTML += `</p>`;
}
let borrarEj23 = document.querySelector("#borrar-ej23");
borrarEj23.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej23");
    ej.innerHTML = ``;
}

let realizarEj24 = document.querySelector("#realizar-ej24");
realizarEj24.onclick = function realizarEjercicio() {
    alert("24. Crea un programa que lea un número, e imprima por pantalla los primeros números pares.");
    let ej = document.querySelector("#ej24");
    let num = Number.parseInt(prompt("¿Cuántos números desea imprimir?"));
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `<p>${(i+1)*2}</p>`;    
    }
}
let borrarEj24 = document.querySelector("#borrar-ej24");
borrarEj24.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej24");
    ej.innerHTML = ``;
}

let realizarEj25 = document.querySelector("#realizar-ej25");
realizarEj25.onclick = function realizarEjercicio() {
    alert("25. Modifica el ejercicio anterior para que imprima los primeros números impares.");
    let ej = document.querySelector("#ej25");
    let num = Number.parseInt(prompt("¿Cuántos números desea imprimir?"));
    let cont = 1;
    for(let i = 0 ; i<num; i++){
        ej.innerHTML += `<p>${cont}</p>`;
        cont+=2;
    }
}
let borrarEj25 = document.querySelector("#borrar-ej25");
borrarEj25.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej25");
    ej.innerHTML = ``;
}

let realizarEj26 = document.querySelector("#realizar-ej26");
realizarEj26.onclick = function realizarEjercicio() {
    alert("26. Modifica los dos anteriores para que todo se imprima en la misma línea, pero separando los números por coma en lugar de espacios en blanco.");
    let ej = document.querySelector("#ej26");
    let num = Number.parseInt(prompt("¿Cuántos números desea imprimir?"));
    ej.innerHTML = `<p>Números pares:</p>`;
    ej.innerHTML += `<p>`;
    for(let i = 0 ; i<num; i++){
        if (i == (num-1)){
            ej.innerHTML += `${(i+1)*2}`;
        }else {
            ej.innerHTML += `${(i+1)*2}, `;   
        }
         
    }
    ej.innerHTML += `</p>`;
    ej.innerHTML += `<p>Números impares:</p>`;
    let cont = 1;
    ej.innerHTML += `<p>`;
    for(let i = 0 ; i<num; i++){
        if (i == (num-1)){
            ej.innerHTML += `${cont}`;
        }else {
            ej.innerHTML += `${cont}, `;
        }
        
        cont+=2;
    }
    ej.innerHTML += `</p>`;
}
let borrarEj26 = document.querySelector("#borrar-ej26");
borrarEj26.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej26");
    ej.innerHTML = ``;
}