//! guardar datos en LS

// localStorage.setItem("usuario", "Carpi");
// localStorage.setItem("edad", 29);
// let estudiante = "Maia";
// localStorage.setItem("estudiante", estudiante);


//! obtener datos del LS
// let usuarioEnLS = localStorage.getItem("usuario");
// alert(usuarioEnLS);


//! recorrer el LS
// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     let valor = localStorage.getItem(clave);

//     console.log(clave + ": " + valor);
// }

//? si recuperamos un dato que no existe, nos devuelve null
// let academiaEnLS = localStorage.getItem("academia");
// console.log(academiaEnLS);

//! eliminar de LS

// localStorage.removeItem("usuario");
// localStorage.clear();

//? sessionStorage
//? se guarda solo en la pestaña en la que estamos

// sessionStorage.setItem("usuario", "Carpi");



//! guardar objeto o array
// let usuario = {
//     nombre: "Carpi",
//     edad: 29
// }

// let usuarioJSON = JSON.stringify(usuario);
// localStorage.setItem("usuario", usuarioJSON);


//! recuperar objeto o array
// let usuarioEnLS = localStorage.getItem("usuario");
// let usuarioParseado = JSON.parse(usuarioEnLS);

// console.log(usuarioParseado);


//! guardar en 1 paso
// let usuario = {
//     nombre: "Carpi",
//     edad: 29
// }

// localStorage.setItem("usuario", JSON.stringify(usuario));

//!recuperar en un paso
// let usuarioEnLS = JSON.parse(localStorage.getItem("usuario"));
// console.log(usuarioEnLS);



//! EJEMPLO DE RECUPERAR DATOS!

// const carrito = ["Silla", "Mesa", "Ventana", "Puerta"];
// localStorage.setItem("carrito", JSON.stringify(carrito));


// let carrito = [];

// let carritoEnLS = JSON.parse(localStorage.getItem("carrito")); // null

// if (carritoEnLS) {
//     carrito = carritoEnLS;
// } 

// console.log(carrito);