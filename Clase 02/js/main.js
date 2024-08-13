// string: "Hola, mundo!";
// number: 5
// boolean: true / false

// falsy:
// null, undefined, false, NaN, 0, -0, ""
// truthy:
// cualquier cosa que no sea falsy

//? Operaciones matemáticas siempre devuelven y representan a su resultado
//? Operaciones de comparación siempre devuelven y representan a un booleano

// ==           Es igual
// ===          Es estrictamente igual
// !=           Es distinto
// !==          Es estrictamente distinto
// < <= > >=    Menor / Mayor / Menor o igual / Mayor o igual

// const nombre = "";
// let numero = prompt("Ingresá un número");

// if (nombre) {
//     console.log("Hola, mundo!");
// } else {
//     console.log("Chau, mundo!");
// }

// si nombre es truthy, hacer un console.log de hola, si no, hacer un console.log de chau

//! ejemplo con prompt

// const nombreUsuario = prompt("Ingresá tu nombre de usuario");

// if (nombreUsuario == "") {
//     console.log("Nombre de usuario inválido");
// } else {
//     console.log("Bienvenido, " + nombreUsuario);
// }


//! condiciones anidadas

// let precio = 75;

// if (precio < 20) {
//     console.log("El precio es muy barato");
// } else if (precio < 50) {
//     console.log("El precio es barato");
// } else if (precio < 75) {
//     console.log("El precio es caro");
// } else {
//     console.log("El precio es muy caro");
// }

// let numero = 10;
// let comparacion = numero < 5;

// if (comparacion) {
//     console.log("Es verdadera");
// }

//! comparaciones estrictas
//? doble igual = compara valores
//? triple igual = compara valores y tipos de dato

// const resultado = 5 === "5";

// // !=
// // !==

// console.log(resultado);

// .toLowerCase() => convierte a minúsculas
// .toUpperCase() => convierte a mayúsculas

// let string = prompt("Ingresá tu apellido").toLowerCase();
// console.log(string);

// let nombre = prompt("Ingresá tu nombre");
// let apellido = prompt("Ingresá tu apellido");

// // .trim() => elimina espacios al comienzo y al final de una string

// if (nombre.trim() !== "" && apellido.trim() !== "") {
//     console.log("Bienvenido " + nombre + " " + apellido + ".");
// } else {
//     console.log("Nombre o apellido inválidos.");
// }


// let nombre = prompt("Ingresá tu nombre");
// ana

// if (nombre === "ana" || nombre === "Ana" || nombre === "aNa" || nombre === "anA" || nombre === "AnA" || nombre === "ANA") {
//     console.log("Bienvenida Ana");
// } else {
//     console.log("No sos Ana");
// }


//! AND && => todas las condiciones deben ser verdaderas
//! OR || => al menos una condición debe ser verdadera

// if (   nombre != "" && (nombre == "ana" || nombre == "ANA")    ) {
//     console.log("Primero true");
// }

// if (   (nombre != "" && nombre == "ana") || nombre == "ANA"     ) {
//     console.log("Segundo true");
// }


//! ACTIVIDAD 1

// let numero = parseInt(prompt("Ingresá un número"));
// if (numero > 1000) {
//     alert("Es mayor a 1000");
// }


//! ACTIVIDAD 2

// let texto = prompt("Ingresá un saludo");
// if (texto.toLowerCase().trim() === "hola") {
//     console.log("Es igual!");
// }


//! ACTIVIDAD 3

// let numero = parseInt(prompt("Ingresá un número"));

// if (numero >= 10 && numero <= 50) {
//     alert("Número correcto!");
// }

