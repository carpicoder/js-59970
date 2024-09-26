//! setTimeout

// console.log("Hola!");
// setTimeout(() => {
//     console.log("Medio!");
// }, 1000);
// console.log("Chau!");

//! setInterval

// let contador = 0;
// let intervalo = setInterval(() => {
//     console.log(contador);
//     if (contador === 10) {
//         clearInterval(intervalo);
//     } else {
//         contador++;
//     }
// }, 1000);

//! Promesas
//? pending = pendiente
//? fullfilled = completada
//? rejected = rechazada

// function eventoFuturo(info) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             info === true ? resolve("👍🏽") : reject("Promesa rechazada");
//         }, 1000);
//     })
// }

// eventoFuturo(true)
//     .then((respuesta) => {console.log(respuesta)})
//     .catch((respuesta) => {console.log(respuesta)})
//     .finally(() => { console.log("Finalmente estamos acá!") })