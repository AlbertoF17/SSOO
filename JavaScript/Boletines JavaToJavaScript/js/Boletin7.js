// BOLETIN 7

let realizarEj1 = document.querySelector("#realizar-ej1");
realizarEj1.onclick = function realizarEjercicio() {
    alert("1. Leer dos números enteros e imprimir el mayor de ellos.");
    let a = Number.parseInt(prompt("Valor del primer entero:"));
    let b = Number.parseInt(prompt("Valor del segundo entero:")); 
    let ej = document.querySelector("#ej1");
    if (a>b) {
        ej.innerHTML = `<p>El mayor es el primer número: ${a}</p>`;
    } else if (a<b) {
        ej.innerHTML = `<p>El mayor es el segundo número: ${b}</p>`;
    } else {
        ej.innerHTML = `<p>Son iguales: ${a}</p>`;
    }
}
let borrarEj1 = document.querySelector("#borrar-ej1");
borrarEj1.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej1");
    ej.innerHTML = ``;
}

let realizarEj2 = document.querySelector("#realizar-ej2");
realizarEj2.onclick = function realizarEjercicio() {
    alert("2. Leer un entero y comprobar si es negativo o positivo, imprimiendo por pantalla una frase al respecto. Considere el cero como positivo.");
    let num = Number.parseInt(prompt("Introduzca un numero entero:")); 
    let ej = document.querySelector("#ej2");
    if (num>=0) {
        ej.innerHTML = `<p>El número ${num} es un número positivo</p>`;
    } else {
        ej.innerHTML = `<p>El número ${num} es un número negativo</p>`;
    }
}
let borrarEj2 = document.querySelector("#borrar-ej2");
borrarEj2.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej2");
    ej.innerHTML = ``;
}

let realizarEj3 = document.querySelector("#realizar-ej3");
realizarEj3.onclick = function realizarEjercicio() {
    alert("3. Modifique el ejercicio anterior para que, en caso de introducir un cero, se imprima por pantalla un mensaje específico.");
    let num = Number.parseInt(prompt("Introduzca un numero entero:")); 
    let ej = document.querySelector("#ej3");
    if (num>0) {
        ej.innerHTML = `<p>El número ${num} es un número positivo</p>`;
    } else if (num==0){
        ej.innerHTML = `<p>El número ${num} es cero</p>`;
    } else {
        ej.innerHTML = `<p>El número ${num} es un número negativo</p>`;
    }
}
let borrarEj3 = document.querySelector("#borrar-ej3");
borrarEj3.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej3");
    ej.innerHTML = ``;
}

let realizarEj4 = document.querySelector("#realizar-ej4");
realizarEj4.onclick = function realizarEjercicio() {
    alert("4. Leer una edad y comprobar si la persona es mayor de edad, imprimiendo una frase al respecto. Si es menor, imprimir también un mensaje.");
    let edad = Number.parseInt(prompt("Introduzca su edad:")); 
    let ej = document.querySelector("#ej4");
    if (edad>=18) {
        ej.innerHTML = `<p>Es mayor de edad</p>`;
    } else {
        ej.innerHTML = `<p>Es menor de edad</p>`;
    }
    
}
let borrarEj4 = document.querySelector("#borrar-ej4");
borrarEj4.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej4");
    ej.innerHTML = ``;
}

let realizarEj5 = document.querySelector("#realizar-ej5");
realizarEj5.onclick = function realizarEjercicio() {
    alert("5. Modificar el ejercicio anterior para que además se compruebe si es jubilado (tiene más de 67 años), imprimiendo un mensaje al respecto.");
    let edad = Number.parseInt(prompt("Introduzca su edad:")); 
    let ej = document.querySelector("#ej5");
    if (edad>=67) {
        ej.innerHTML = `<p>Es jubilado</p>`;
    } else if (edad>=18) {
        ej.innerHTML = `<p>Es mayor de edad</p>`;
    } else {
        ej.innerHTML = `<p>Es menor de edad</p>`;
    }
    
}
let borrarEj5 = document.querySelector("#borrar-ej5");
borrarEj5.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej5");
    ej.innerHTML = ``;
}

let realizarEj6 = document.querySelector("#realizar-ej6");
realizarEj6.onclick = function realizarEjercicio() {
    alert("6. Modificar el ejercicio anterior para que solo se permita una edad válida (0 a 120). En caso de ser válida hará todo lo implementado anteriormente. En caso de ser inválida, se imprimirá un mensaje de error y el programa acabará.");
    let edad = Number.parseInt(prompt("Introduzca su edad:")); 
    let ej = document.querySelector("#ej6");
    if (edad>=0 && edad<=120) {
        if (edad>=67) {
            ej.innerHTML = `<p>Es jubilado</p>`;
        } else if (edad>=18) {
            ej.innerHTML = `<p>Es mayor de edad</p>`;
        } else {
            ej.innerHTML = `<p>Es menor de edad</p>`;
        }
    } else {
        ej.innerHTML = `<p>Error: edad no válida</p>`;
    }    
}
let borrarEj6 = document.querySelector("#borrar-ej6");
borrarEj6.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej6");
    ej.innerHTML = ``;
}

let realizarEj7 = document.querySelector("#realizar-ej7");
realizarEj7.onclick = function realizarEjercicio() {
    alert("7. Leer seis números y comprobar si coinciden con la combinación ganadora de la primitiva (1, 3, 10, 20, 33, 40), imprimiendo un mensaje al respecto.");
    let num1 = Number.parseInt(prompt("Introduzca el primer número de la primitiva:"));
    let num2 = Number.parseInt(prompt("Introduzca el segundo número de la primitiva:"));
    let num3 = Number.parseInt(prompt("Introduzca el tercer número de la primitiva:"));
    let num4 = Number.parseInt(prompt("Introduzca el cuarto número de la primitiva:"));
    let num5 = Number.parseInt(prompt("Introduzca el quinto número de la primitiva:"));
    let num6 = Number.parseInt(prompt("Introduzca el sexto número de la primitiva:"));
    let boolPrimitiva = (num1==1 && num2==3 && num3==10 && num4==20 && num5==33 && num6==40);
    let ej = document.querySelector("#ej7");
    if (boolPrimitiva) {
        ej.innerHTML =  `<p>GANASTE LA PRIMITIVA</p>`;
    } else {
        ej.innerHTML = `<p>Inténtalo otro día</p>`;
    }    
}
let borrarEj7 = document.querySelector("#borrar-ej7");
borrarEj7.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej7");
    ej.innerHTML = ``;
}

let realizarEj8 = document.querySelector("#realizar-ej8");
realizarEj8.onclick = function realizarEjercicio() {
    alert("8. Modificar el ejercicio anterior para que, al leerlos, se compruebe si todos los números leídos tienen el rango apropiado (entre 1 y 49). Si no lo tienen, imprimir un mensaje de error y el programa acabará.");
    let num1 = Number.parseInt(prompt("Introduzca el primer número de la primitiva:"));
    let num2 = Number.parseInt(prompt("Introduzca el segundo número de la primitiva:"));
    let num3 = Number.parseInt(prompt("Introduzca el tercer número de la primitiva:"));
    let num4 = Number.parseInt(prompt("Introduzca el cuarto número de la primitiva:"));
    let num5 = Number.parseInt(prompt("Introduzca el quinto número de la primitiva:"));
    let num6 = Number.parseInt(prompt("Introduzca el sexto número de la primitiva:"));
    let boolPrimitiva = (num1==1 && num2==3 && num3==10 && num4==20 && num5==33 && num6==40);
    let ej = document.querySelector("#ej8");
    if (num1>=1 && num1<=49 && num2>=1 && num2<=49 && num3>=1 && num3<=49 && num4>=1 && num4<=49 && num5>=1 && num5<=49  && num6>=1 && num6<=49) {
        if (boolPrimitiva) {
            ej.innerHTML =  `<p>GANASTE LA PRIMITIVA</p>`;
        } else {
            ej.innerHTML = `<p>Inténtalo otro día</p>`;
        }
    
    } else {
        ej.innerHTML = `<p>Error: número fuera del rango admitido</p>`;
    } 
}
let borrarEj8 = document.querySelector("#borrar-ej8");
borrarEj8.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej8");
    ej.innerHTML = ``;
}

let realizarEj9 = document.querySelector("#realizar-ej9");
realizarEj9.onclick = function realizarEjercicio() {
    alert("9. Leer por pantalla un entero y comprobar si es par o impar (use el operador módulo %).");
    let parImpar = Number.parseInt(prompt("Introduzca un número:"));
    let ej = document.querySelector("#ej9");
    if (parImpar%2==0) {
        ej.innerHTML = `<p>El número es par</p>`;
    } else {
        ej.innerHTML = `<p>El número es impar</p>`;
    }
}
let borrarEj9 = document.querySelector("#borrar-ej9");
borrarEj9.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej9");
    ej.innerHTML = ``;
}

/*CONTINUAR POR AQUI*/

let realizarEj10 = document.querySelector("#realizar-ej10");
realizarEj10.onclick = function realizarEjercicio() {
    alert("10. Crear un programa que calcule el índice de masa corporal. Lea los datos que sean necesarios, imprima por pantalla el índice, y dependiendo de su valor imprima al usuario un mensaje informativo.");
    let peso = Number.parseInt(prompt("Introduzca su peso en kilogramos:"));
    let altura = Number.parseInt(prompt("Introduzca su altura en metros:"));
    let IMC = (peso/(altura*altura));
    let ej = document.querySelector("#ej10");
    if (IMC<18.5) {
        ej.innerHTML = `Usted tiene bajo peso`;
    } else if (IMC<25) {
        ej.innerHTML = `Usted tiene peso normal`;
    } else if (IMC<30) {
        ej.innerHTML = `Usted tiene sobrepeso`;
    } else {
        ej.innerHTML = `Usted tiene obesidad`;
    }
}
let borrarEj10 = document.querySelector("#borrar-ej10");
borrarEj10.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej10");
    ej.innerHTML = ``;
}


let realizarEj11 = document.querySelector("#realizar-ej11");
realizarEj11.onclick = function realizarEjercicio() {
    alert("11. Leer por pantalla un número entre 1 y 12 e imprimir por pantalla el nombre del mes correspondiente. En caso de leer un número fuera de rango, imprimir por pantalla un mensaje de error.");
    let mes = Number.parseInt(prompt("Introduzca un numero entre el 1 y el 12:"));
    let ej = document.querySelector("#ej11");
    switch (mes) {
        case 1:
            ej.innerHTML = `Enero`;
            break;
        case 2:
            ej.innerHTML = `Febrero`;
            break;
        case 3:
            ej.innerHTML = `Marzo`;
            break;
        case 4:
            ej.innerHTML = `Abril`;
            break;
        case 5:
            ej.innerHTML = `Mayo`;
            break;
        case 6:
            ej.innerHTML = `Junio`;
            break;
        case 7:
            ej.innerHTML = `Julio`;
            break;
        case 8:
            ej.innerHTML = `Agosto`;
            break;
        case 9:
            ej.innerHTML = `Septiembre`;
            break;
        case 10:
            ej.innerHTML = `Octubre`;
            break;
        case 11:
            ej.innerHTML = `Noviembre`;
            break;
        case 12:
            ej.innerHTML = `Diciembre`;
            break;
        default:
            ej.innerHTML = `Numero no valido`;
            break;
    }
}
let borrarEj11 = document.querySelector("#borrar-ej11");
borrarEj11.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej11");
    ej.innerHTML = ``;
}


let realizarEj12 = document.querySelector("#realizar-ej12");
realizarEj12.onclick = function realizarEjercicio() {
    alert("12. Establezca un número entre 0 y 9999, que servirá como contraseña. Puede elegir el que desee. Pida por pantalla un número y si coincide escriba “Contraseña correcta, accediendo al sistema”, en caso contrario escriba “Contraseña incorrecta, cerrando sesión”.");
    let pass = 9412;
    let intentoPass = Number.parseInt(prompt("Introduzca la contraseña (número entre 0 y 9999):"));
    let ej = document.querySelector("#ej12");
    if (intentoPass==pass) {
        ej.innerHTML = `Contraseña correcta, accediendo al sistema`;
    } else {
        ej.innerHTML = `Contraseña incorrecta, cerrando sesión`;
    }
}
let borrarEj12 = document.querySelector("#borrar-ej12");
borrarEj12.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej12");
    ej.innerHTML = ``;
}


let realizarEj13 = document.querySelector("#realizar-ej13");
let precio;
realizarEj13.onclick = function realizarEjercicio() {
    alert("13. Desarrolle un sistema de cálculo de descuentos para una farmacia. Cuando el usuario introduzca un precio, usted deberá aplicar un descuento del 15% a ese valor, e imprimir por pantalla el precio final. Recuerde que debe imprimir el precio final tras aplicar el descuento, no la cantidad que se descuenta.");
    precio = Number.parseInt(prompt("Introduzca el precio del producto:"));
    let ej = document.querySelector("#ej13");
    ej.innerHTML = `<p>El precio sin descuento es: ${precio}€</p><p>El precio con descuento es: ${precio*0.85}€</p>`;
}
let borrarEj13 = document.querySelector("#borrar-ej13");
borrarEj13.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej13");
    ej.innerHTML = ``;
}


let realizarEj14 = document.querySelector("#realizar-ej14");
realizarEj14.onclick = function realizarEjercicio() {
    alert("14. Modifique el anterior para que además se imprima la cantidad que se descuenta.");
    let ej = document.querySelector("#ej14");
    ej.innerHTML = `<p>El precio sin descuento es: ${precio}€</p><p>El precio con descuento es: ${precio*0.85}€</p><p>La cantidad descuentada es: ${precio-precio*0.85}€</p>`;
}
let borrarEj14 = document.querySelector("#borrar-ej14");
borrarEj14.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej14");
    ej.innerHTML = ``;
}


let realizarEj15 = document.querySelector("#realizar-ej15");
realizarEj15.onclick = function realizarEjercicio() {
    alert("15. Diseñe un programa que lea la temperatura en centígrados del día e imprima el tipo de clima de acuerdo a la siguiente tabla.");
    let temp = Number.parseInt(prompt("Introduzca la temperatura en grados centígrados:"));
    let ej = document.querySelector("#ej15");
    if (temp<=10) {
        ej.innerHTML = `El clima es frio`;
    } else if (temp>10 && temp<=20) { // (temp<=20)
        ej.innerHTML = `El clima es nublado`;
    } else if (temp>20 && temp<=30){ // (temp<=30)
        ej.innerHTML = `El clima es caluroso`;
    } else {
        ej.innerHTML = `El clima es tropical`;
    }
}
let borrarEj15 = document.querySelector("#borrar-ej15");
borrarEj15.onclick = function borrarEjercicio() {
    let ej = document.querySelector("#ej15");
    ej.innerHTML = ``;
}



/*
//16. Pedir un número entre 0 y 99999 y decir cuántas cifras tiene.
System.out.println("Ejercicio 16: 0-99999");
System.out.print("Introduzca un numero entre 0 y 99999: ");
int numero = sc.nextInt();

if (numero>=0 && numero<10) {
    System.out.println("Numero de 1 cifra detectado");
} else if (numero>=10 && numero<100) { //(numero<100)
    System.out.println("Numero de 2 cifras detectado");
} else if (numero>=100 && numero<1000) { // (numero<1000)
    System.out.println("Numero de 3 cifras detectado");
} else if (numero>=1000 && numero<10000) { // (numero<10000)
    System.out.println("Numero de 4 cifras detectado");
} else if (numero>=10000 && numero<100000) { // (numero<100000)
    System.out.println("Numero de 5 cifras detectado");
} else {
    System.out.println("Numero fuera del rango");
}

int cont = 1;
if (numero>0 && numero<=99999) {
    while (numero>=10) {
        numero = numero / 10;
        cont++;
    }
    System.out.println("Numero de "+ cont +" cifras detectado");
} else {
    System.out.println("Numero fuera del rango");
}

//17. La universidad ha categorizado las matrículas de acuerdo a la facultad que va a
//estudiar el postulante. Ingrese por teclado el nombre de la facultad donde va a
//estudiar, y muestre el importe y la mensualidad. (Use el control switch-case, y
//recuerde que el nombre que introduzca debe coincidir exactamente con el nombre de universidad).
System.out.println("Ejercicio 17: Universidades");
System.out.print("Introduzca la universidad: ");
sc.nextLine();
String uni = sc.nextLine();
switch (uni) {
    case "Ing. de Sistemas":
        System.out.println("Importe: 350 | Mensualidad: 650");
        break;
    case "Derecho":
        System.out.println("Importe: 300 | Mensualidad: 550");
        break;
    case "Ing. Naviera":
        System.out.println("Importe: 300 | Mensualidad: 500");
        break;
    case "Ing. Pesquera":
        System.out.println("Importe: 310 | Mensualidad: 460");
        break;
    case "Contabilidad":
        System.out.println("Importe: 280 | Mensualidad: 490");
        break;
    case "Administración":
        System.out.println("Importe: 360 | Mensualidad: 520");
        break;
    default:
        System.out.println("Esta universidad no consta en nuestra base de datos");
}

//18. Escriba programa para ingresar 4 notas de un alumno, calcular y mostrar su
//promedio, sabiendo que la primera y segunda tiene 20% de peso cada una, la
//tercera y cuarta tienen 30% de peso cada una.
System.out.println("Ejercicio 18: Notas");
System.out.println("Teclee las notas del alumno: ");
float nota1 = sc.nextFloat();
float nota2 = sc.nextFloat();
float nota3 = sc.nextFloat();
float nota4 = sc.nextFloat();
System.out.println("Su nota promedio es: " + (nota1*0.2 + nota2*0.2 + nota3*0.3 + nota4*0.3));

//19. Desarrolle un programa que pida cuantos hombres y mujeres hay en un aula y
//permita calcular el porcentaje de hombres y mujeres.
System.out.println("Ejercicio 19: %hombres vs %mujeres");
System.out.print("Indique numero de hombres: ");
int hombres = sc.nextInt();
System.out.print("Indique numero de mujeres: ");
int mujeres = sc.nextInt();
int total = hombres + mujeres;
System.out.println("El porcentaje de hombres es del " + (hombres*100f/total) + "%");
System.out.println("El porcentaje de mujeres es del " + (mujeres*100f/total) + "%");

//20. A partir de aquí, los ejercicios son complicados. No se frustre si no le salen.
System.out.println("Ejercicio 20: consejo (no ejercicio)");
//Vale, gracias por el consejo.

//20b (swap)
System.out.println("Ejercicio 20: swapping");
System.out.print("Introduzca el primer numero: ");
int swapA = sc.nextInt();
System.out.print("Introduzca el segundo numero: ");
int swapB = sc.nextInt();
int swapC;
System.out.println("valores originales: A=" + swapA + " | B=" + swapB);
swapC=swapA;
swapA=swapB;
swapB=swapC;
System.out.println("valores finales: A=" + swapA + " | B=" + swapB);

//21. Leer por pantalla dos números enteros, e imprimirlos por pantalla en orden creciente.
System.out.println("Ejercicio 21: ordenación 2 números");
System.out.println("Introduzca 2 números a ordenar: ");
int x = sc.nextInt();
int y = sc.nextInt();
if (x>y) {
    System.out.println("Números en orden creciente: " + y + ", " + x);
} else if (x<y) {
    System.out.println("Números en orden creciente: " + x + ", " + y);
} else {
    System.out.println("Son iguales " + x + " y " + y);
}

//22. Leer por pantalla tres números enteros, e imprimirlos por pantalla en orden
//creciente.
System.out.println("Ejercicio 22: ordenación 3 números");
System.out.println("Introduzca 3 números a ordenar (parte 1): ");
int numA = sc.nextInt();
int numB = sc.nextInt();
int numC = sc.nextInt();
int numD;
if (numA>numC) {
    numD=numA;
    numA=numC;
    numC=numD;
}
if (numA>numB) {
    numD=numA;
    numA=numB;
    numB=numD;
}
if (numB>numC) {
    numD=numB;
    numB=numC;
    numC=numD;
}
System.out.println("Números en orden creciente: " + numA + ", " + numB + ", " + numC);

if (numA>numB) {
    // c > a; b > c; a>c&&c>b
    if (numC>numA){
        System.out.println("Números en orden creciente: " + numB + ", " + numA + ", " + numC);
    } else if (numB>numC) {
        System.out.println("Números en orden creciente: " + numC + ", " + numB + ", " + numA);
    } else {
        System.out.println("Números en orden creciente: " + numB + ", " + numC + ", " + numA);
    }
} else if (numB>numA) {
    //c>b; a>c; b>c&&c>a
    if (numC>numB){
        System.out.println("Números en orden creciente: " + numA + ", " + numB + ", " + numC);
    } else if (numA>numC) {
        System.out.println("Números en orden creciente: " + numC + ", " + numA + ", " + numB);
    } else {
        System.out.println("Números en orden creciente: " + numA + ", " + numC + ", " + numB);
    }
} else {
    System.out.println("Algunos de los números introducidos son equivalentes");
}


//23. Repetir el ejercicio anterior, e imprimirlos en orden decreciente.
System.out.println("Ejercicio 23: ordenación 3 números inversamente");
System.out.println("Introduzca 3 números a ordenar (parte 2): ");
    int numA2 = sc.nextInt();
int numB2 = sc.nextInt();
int numC2 = sc.nextInt();
if (numA2>numB2) {
   // c > a; b > c; a>c&&c>b
    if (numC2>numA2){
        System.out.println("Números en orden decreciente: " + numC2 + ", " + numA2 + ", " + numB2);
    } else if (numB2>numC2) {
        System.out.println("Números en orden decreciente: " + numA2 + ", " + numB2 + ", " + numC2);
    } else {
        System.out.println("Números en orden decreciente: " + numA2 + ", " + numC2 + ", " + numB2);
    }
} else if (numB2>numA2) {
    //c>b; a>c; b>c&&c>a
    if (numC2>numB2){
        System.out.println("Números en orden decreciente: " + numC2 + ", " + numB2 + ", " + numA2);
    } else if (numA>numC) {
        System.out.println("Números en orden decreciente: " + numB2 + ", " + numA2 + ", " + numC2);
    } else {
        System.out.println("Números en orden decreciente: " + numB2 + ", " + numC2 + ", " + numA2);
    }
} else {
    System.out.println("Algunos de los números introducidos son equivalentes");
}

System.out.println("Números en orden decreciente: " + numC + ", " + numB + ", " + numA);

//24. Lea un número por pantalla y determine si es múltiplo de 10 (use el operador módulo).
System.out.println("Ejercicio 24: Prueba múltiplo de 10");
System.out.print("Introduzca un número: ");
int multDiez = sc.nextInt();
String esMul = (multDiez%10==0) ?  ("Es múltiplo de 10: " + multDiez/10) : "No es múltiplo de 10";
System.out.println(esMul);

//if (multDiez%10==0) {
//    System.out.println("Es múltiplo de 10: " + multDiez/10);
//} else {
//    System.out.println("No es múltiplo de 10");
//}


//25. Leer por pantalla un número de tres cifras, e imprimir cada una de sus cifras en una línea.
System.out.println("Ejercicio 25: 3 cifras en 3 lineas");
System.out.print("Introduzca un numero de 3 cifras: ");
int tresCifras = sc.nextInt();
if (tresCifras>=100 && tresCifras<999) {
    int cifra1 = tresCifras / 100;
    int cifra2 = (tresCifras - cifra1 * 100) / 10;
    int cifra3 = (tresCifras - cifra1 * 100 - cifra2 * 10);
    System.out.println(cifra1 + "\n" + cifra2 + "\n" + cifra3);
} else {
    System.out.println("Número no valido");
}

//26. Crea una aplicación llamada CalculadoraInversa, que lea por pantalla dos operandos
//(String) y un signo aritmético (String), y según este último se realizará la operación
//correspondiente. Al final mostrará el resultado en consola. Los signos aritméticos
//disponibles son:
//+: suma los dos operandos.
//-: resta los operandos.
/: multiplica los operandos.
///: divide los operandos, este debe dar un resultado con decimales (double)
//%: módulo, resto de la división entre operando1 y operando2.
//Para leer por pantalla usar únicamente nextLine.
System.out.println("Ejercicio 26: Calculadora Inversa");
System.out.println("Introduzca el primer operando");
float op1 = sc.nextInt();
System.out.println("Introduzca el segundo operando");
float op2 = sc.nextInt();
System.out.println("Introduzca la operación que desee realizar:");
String operacion = sc.next();
switch (operacion) {
    case "suma" -> System.out.println("El resultado de la suma de ambos números es: " + (op1 + op2));
    case "resta" -> System.out.println("El resultado de la resta de ambos números es: " + (op1 - op2));
    case "multiplicacion" -> System.out.println("El resultado de la multiplicacion de ambos números es: " + (op1 * op2));
    case "division" -> System.out.println("El resultado de la division de ambos números es: " + (op1 / op2));
    case "resto" -> System.out.println("El resto de dividir" + op1 + " entre " + op2 + "es: " + op1%op2);
    default -> System.out.println("Operación no disponible");
}
System.out.println("------------FIN------------");
System.out.println();

//27. En un casino de juegos se desea mostrar los mensajes respectivos por el puntaje
//obtenido en el lanzamiento de tres dados de un cliente, de acuerdo a los siguientes
//resultados:
//Si los tres dados son seis, mostrar el mensaje “Muy buena suerte”
//Si dos dados son seis, mostrar el mensaje “Buena suerte”
//Si un dado es seis, mostrar el mensaje “Mala Suerte”
//Si ningún dado se obtiene seis, mostrar el mensaje “Muy mala suerte”
//Simule los lanzamientos con tres números aleatorios, usando instrucciones Java que los genere.
System.out.println("Ejercicio 27: Dados");
Random rand = new Random();
System.out.println("Lanzando los dados...");
int dado1 = rand.nextInt(1,7);
int dado2 = rand.nextInt(1,7);
int dado3 = rand.nextInt(1,7);
System.out.println("La combinación de los dados es: " + dado1 + ", " + dado2 + ", " + dado3);
if (dado1==6 && dado2==6 && dado3==6) {
    System.out.println("Muy buena suerte");
} else if (dado1==6 && dado2==6 || dado1==6 && dado3==6 || dado2==6 && dado3==6) {
    System.out.println("Buena suerte");
} else if (dado1==6 || dado2==6 || dado3==6) {
    System.out.println("Mala suerte");
} else {
    System.out.println("Muy mala suerte");
}*/