//! MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN DE ARRAYS

//! forEach() => recorre el Array y nos permite ejecutar algunas acciones sobre los elementos
//? el primer parámetro representa a cada elemento del Array
//? el segundo parámetro es opcional, representa al índice de cada elemento del Array

// const usuarios = ["Carpi", "Luis", "María"];

// usuarios.forEach((usuario, index) => {
//     console.log("Índice " + index + ": " + usuario);
// })


//! find() => recorre el Array y nos retorna el primer elemento que coincida con la condición que le pongamos

// const usuarios = ["Carpi", "Luis", "María"];
// let usuarioEncontrado = usuarios.find((usuario) => usuario === "Luis");
// console.log(usuarioEncontrado);

// const usuarios = [
//     {
//         nombre: "Carpi",
//         edad: 29
//     },
//     {
//         nombre: "Alesio",
//         edad: 30
//     },
//     {
//         nombre: "Nico",
//         edad: 25
//     }
// ]
// let usuarioEncontrado = usuarios.find(usuario => usuario.nombre === "Alesio");
// console.log(usuarioEncontrado);

//! filter() => recorre el Array y nos retorna un nuevo Array con todos los elementos que coincidan con la condición que le pongamos

// const usuarios = [
//     {
//         nombre: "Carpi",
//         edad: 29
//     },
//     {
//         nombre: "Alesio",
//         edad: 29
//     },
//     {
//         nombre: "Nico",
//         edad: 25
//     }
// ]
// let usuariosEncontrados = usuarios.filter((usuario) => usuario.edad > 25);
// console.log(usuariosEncontrados);

//! some() => recorre el Array y nos retorna true o false dependiendo de si encuentra o no un elemento que coincida con la condición que le pongamos

// const usuarios = ["Carpi", "Luis", "María"];

// console.log( usuarios.some((usuario) => usuario === "Luis") );
// console.log( usuarios.some((usuario) => usuario === "Franco") );

// let hayMaia = usuarios.some( function(usuario) { return usuario === "Maia" } )
// console.log(hayMaia);

//! map() => recorre el Array y nos retorna un nuevo Array con la misma cantidad de elementos que el original pero extrayendo o modificando algunas cositas

// const usuarios = [
//     {
//         nombre: "Carpi",
//         edad: 29
//     },
//     {
//         nombre: "Alesio",
//         edad: 29
//     },
//     {
//         nombre: "Nico",
//         edad: 25
//     }
// ]

// const nombres = usuarios.map(usuario => usuario.nombre);
// console.log(nombres);

// const usuariosViejos = usuarios.map(usuario => {
//     return {
//         nombre: usuario.nombre.toUpperCase(),
//         edad: usuario.edad + 1
//     }
// })
// console.log(usuariosViejos);

//! reduce() => retornar un valor único de nuestro array tras recorrerlo

// const carrito = [
//     {
//         titulo: "Mesa",
//         precio: 2000,
//         cantidad: 1 // 2000
//     },
//     {
//         titulo: "Silla",
//         precio: 3000,
//         cantidad: 4 // 12000
//     },
//     {
//         titulo: "Puerta",
//         precio: 5000,
//         cantidad: 2 // 10000
//     }
// ];

// const total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
// console.log(total);

// const precios = [2000, 3000, 5000]
// const total = precios.reduce((acc, precio) => acc + precio, 0);
// console.log(total);

//! sort() => reordenar el Array

// const numeros = [5, 99, 1, 15, 34, 20];

//? ordenar números de menor a mayor
// numeros.sort((a, b) => a - b);
// console.log(numeros);

//? ordenar números de mayor a menor
// numeros.sort((a, b) => b - a);
// console.log(numeros);

// const usuarios = [
//     {
//         nombre: "Carpi",
//         edad: 29
//     },
//     {
//         nombre: "Alesio",
//         edad: 30
//     },
//     {
//         nombre: "Nico",
//         edad: 25
//     }
// ]

//? ordenar objetos en base a alguna propiedad
// usuarios.sort((a, b) => a.edad - b.edad);
// console.log(usuarios);

//? ordenar alfabéticamente
// usuarios.sort((a, b) => {
//     if (a.nombre > b.nombre) {
//         return 1;
//     } else if (a.nombre < b.nombre) {
//         return -1;
//     } else {
//         return 0;
//     }
// })

// console.log(usuarios);