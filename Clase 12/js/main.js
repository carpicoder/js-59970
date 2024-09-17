// let numero = 1;

// numero = numero + 1; //2
// numero++; //3

// numero = numero + 5; //8
// numero += 5; //13

// console.log(numero);

//! Operador ternario

//? ternario con condición
// let temperatura = 31;
// if (temperatura > 30) {
//     console.log("Calor");
// } else {
//     console.log("Frío");
// }
// temperatura > 30 ? console.log("Calor") : console.log("Frío");

//? ternario con función como condición
// function resultado() {
//     return true;
// }
// resultado() ? console.log("Calor") : console.log("Frío");

//? ternario asignando valor

// let puedeIngresar;
// let edad = 18;

// if (edad >= 18) {
//     puedeIngresar = "Sí";
// } else {
//     puedeIngresar = "No";
// }


// let edad = 18;
// let puedeIngresar = (edad >= 18) ? "Sí" : "No";
// console.log(puedeIngresar);

//? console.log ternario

// let edad = 18;

// if (edad >= 18) {
//     console.log("Podés ingresar");
// } else {
//     console.log("No podés ingresar");
// }

// console.log(edad >= 18 ? "Podés ingresar" : "No podés ingresar");

//! Operador AND

let temperatura = 15;

// if (temperatura > 30) {
//     console.log("Hace calor!");
// }

// temperatura > 30 && console.log("Hace calor!");

// let comoEstaElDia;
// if (temperatura > 30) {
//     comoEstaElDia = "Hace calor!";
// }

// let comoEstaElDia = temperatura > 30 && "Hace calor!";
// console.log(comoEstaElDia);


//! Operador OR
//? Devuelve el primer elemento que encuentre que NO sea Falsy; si no hay ninguno NO Falsy, devuelve el último elemento!

/*
    ? Valores falsy
    0
    ""
    false
    undefined
    null
    NaN
    -0
*/

// console.log( undefined || false || "" );

// let usuario1 = {
//     nombre: "Carpi",
//     edad: 29
// }

// let usuario2;

// console.log(usuario1 || "Usuario no encontrado");
// console.log(usuario2 || "Usuario no encontrado");


// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// carrito.push("Botella");
// console.log(carrito);


//! Operador NULLISH
//? Devuelve el primer elemento que encuentre que NO sea Nullish; si no hay ninguno NO Nullish, devuelve el último elemento!

/*
    ? Valores nullish
    null
    undefined
*/

// console.log( undefined ?? null );


//! Acceso condicional a objetos

// let usuario1 = {
//     nombre: "Carpi",
//     edad: 29
// }
// let usuario2;

// console.log( usuario1?.nombre || "Usuario inválido" );
// console.log( usuario2?.nombre || "Usuario inválido" );


//! Desestructuración de objetos

// const usuario1 = {
//     nombre: "Carpi",
//     edad: 29,
//     pais: "Argentina"
// }

// const usuario2 = {
//     nombre: "Branko",
//     edad: 25,
//     pais: "Uruguay"
// }


// function mostrarUsuario(usuario) {
//     let {nombre: username, edad, pais} = usuario;

//     console.log(username);
//     console.log(edad);
//     console.log(pais);
// }

// function mostrarUsuario({nombre: username, edad, pais}) {
//     console.log(username);
//     console.log(edad);
//     console.log(pais);
// }

// mostrarUsuario(usuario2);


//? ejemplo con array de objetos
// const usuarios = [
//     {nombre: "Carpi", edad: 29},
//     {nombre: "Roco", edad: 29},
//     {nombre: "Miguel", edad: 29},
//     {nombre: "Juan", edad: 29}
// ]

// usuarios.forEach((usuario) => {
//     let {nombre, edad} = usuario;

//     console.log(nombre);
//     console.log(edad);
// })


//! Desestructuración de arrays

let productos = ["Silla", "Mesa", "Ventana", "Puerta"];

let [primero, , , cuarto] = productos;

console.log(primero);
console.log(cuarto);