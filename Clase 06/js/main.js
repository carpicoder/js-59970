// let nombres = ["Rodri", "Ema", "Juan", "Branko", "Silvina"];
// //                0       1      2        3          4

// let numeros = [1, 5, 8, 10];
// let booleanos = [true, true, false, true, false];
// let mezcla = [1, "Isaias", true];

// let usuarios = [ 
//     { 
//         nombre: "Carpi",
//         edad: 29
//     },
//     {
//         nombre: "Alesio",
//         edad: 30
//     }
// ]

// console.log( usuarios[0].nombre, usuarios[0].edad );

// for (let i = 0; i < nombres.length; i++) {
//     console.log( nombres[i] );
// }

//! **********************
//! MÉTODOS Y PROPIEDADES
//! **********************

//! length => nos retorna la cantidad de elementos que hay en el Array
// let productos = ["Cama", "Silla", "Mesa", "Puerta"];
// console.log( productos.length );

//! push() => agrega un elemento al final del Array
// let productos = ["Cama", "Silla", "Mesa", "Puerta"];
// productos.push("Ventana");
// console.log(productos);

//! unshift() => agrega un elemento al comienzo del Array
// let productos = ["Cama", "Silla", "Mesa", "Puerta"];
// productos.unshift("Ventana");
// console.log(productos);

//! pop() => elimina el último elemento del Array
// let productos = ["Cama", "Silla", "Mesa", "Puerta"];
// productos.pop();
// console.log(productos);

//! shift() => elimina el primer elemento del Array
// let productos = ["Cama", "Silla", "Mesa", "Puerta"];
// productos.shift();
// console.log(productos);

//! splice() => elimina uno o varios elementos en cualquier posición del Array
//! y también nos permite agregar elementos en ese lugar
//? primer parámetro: el índice del primer elemento a eliminar
//? segundo parámetro: la cantidad de elementos a eliminar hacia adelante
// let productos = ["Cama", "Silla", "Mesa", "Puerta", "Ventana", "Colchón"];
// //                  0       1       2        3          4          5
// productos.splice(2, 1, "Carpa", "Computadora", "Cámara");
// console.log(productos);

//! join() => genera una string con todos los elementos del Array
// let productos = ["Cama", "Silla", "Mesa", "Puerta"];
// console.log( productos.join(" ❤️ ") );

//! concat() => combina dos o más Arrays en uno
// let productos1 = ["Cama", "Silla", "Mesa"];
// let productos2 = ["Ventana", "Puerta", "Heladera"];
// let productosCompletos = productos1.concat(productos2);
// console.log(productosCompletos);

//! slice() => genera otro Array con una copia de una parte del Array original
//? primer parámetro: el índice del primer elemento a copiar
//? segundo parámetro: el índice del elemento siguiente al último al cual queremos copiar
// let productos = ["Cama", "Silla", "Mesa", "Puerta"];
// //                  0       1       2        3
// let comedor = productos.slice(1, 3);
// console.log(comedor);

//! indexOf => devuelve el índice de un elemento del Array
// let productos = ["Cama", "Silla", "Mesa", "Puerta"];
// console.log( productos.indexOf("Mesa") );

//! includes => devuelve true si el elemento está en el Array; false si no está
// let productos = ["Cama", "Silla", "Mesa", "Puerta"];
// console.log( productos.includes("Mesa") );

//! reverse => da vuelta el array :D
// let productos = ["Cama", "Silla", "Mesa", "Puerta"];
// productos.reverse();
// console.log(productos);

//! **********************
//! EJEMPLO CON VARIOS MÉTODOS
//! **********************

// let productoParaVer = prompt("¿Qué producto querés eliminar?");
// if (productos.includes(productoParaVer)) {
//     let indice = productos.indexOf(productoParaVer);
//     productos.splice(indice, 1);
//     console.log(productos);
// }

//! **********************
//! ARRAYS CON OBJETOS
//! **********************

// let usuario1 = {
//     nombre: "Carpi",
//     edad: 29
// }

// let usuarios = [
//     usuario1,
//     { nombre: "Alesio", edad: 30 }
// ]
// usuarios.push( { nombre: "Juan Pablo", edad: 28 } );

// for (let usuario of usuarios) {
//     console.log(usuario.nombre);
// }

//! **********************
//! CLASS DE OBJETO Y ARRAY
//! **********************

// class Producto {
//     constructor(titulo, precio) {
//         this.titulo = titulo;
//         this.precio = precio;
//     }
// }

// let productos = [];

// productos.push(new Producto("Silla", 5000));
// productos.push(new Producto("Mesa", 6000));
// productos.push(new Producto("Puerta", 8000));
// productos.push(new Producto("Ventana", 7000));

// console.log(productos);