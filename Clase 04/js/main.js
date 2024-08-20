// function saludar() {
//     console.log("Hola, mundo!");
// }

//! parámetros!

// let nombreBaseDeDatos = "Carpi";
// let apellidoBaseDeDatos = "Coder";

// function pedirNombre(nombre, apellido) {
//     console.log("Mi nombre es: " + nombre + " " + apellido);
// }

// pedirNombre("Carpi", "Coder");
// pedirNombre("Miguel", "Vivas");
// pedirNombre("Alesio", "Adrover");

//! return / resultado de una función


// function suma(a, b) {
//     const resultado = a + b;
//     console.log(resultado);
//     return resultado;
// }

// let conseguirResultado = suma(2, 4);

// let conseguirResultado = suma(2, 4);

// console.log(conseguirResultado);

//? las funciones con retorno funcionan como variables que contienen el valor de su retorno
//? las funciones con retorno REPRESENTAN al valor de su return


//! TIPOS DE FUNCIONES

//! funciones declaradas

//? se pueden invocar antes de ser declaradas

// function saludar(nombre) {
//     console.log("Hola, " + nombre);
// }

// saludar("Carpi");

//! funciones anónimas

// let saludar = function(nombre) {
//     console.log("Hola, " + nombre);
// }

// saludar("Carpi");

//! funciones flecha

// let saludar = (nombre) => {
//     console.log("Hola, " + nombre);
// }

//? si hay un solo parámetro, podemos omitir los paréntesis
//? si hay una sola sentencia, podemos omitir las llaves
//? tienen return implícito si no usamos llaves

// let saludar = nombre => console.log("Hola, " + nombre);
// saludar("Carpi");

// let suma = (a, b) => a + b;

// let obtenerResultado = suma(2, 4);
// console.log(obtenerResultado);





//! isNaN 
//? devuelve true si es un no-número su parámetro
//? devuelve false si es un número su parámetro
// NaN = Not a Number = No Número

// let numero;

// do {
//     numero = prompt("Ingresá un número");

//     if (isNaN(numero)) {
//         alert("Ingresá un número, sorete")
//     } else {
//         alert("Gracias crack")
//     }
// } while (isNaN(numero))