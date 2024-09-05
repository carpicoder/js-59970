// console.log(document.body);

//! Métodos de acceso a elementos (que Carpi no usa)

// let titulo = document.getElementById("titulo");
// console.log(titulo);

// let parrafos = document.getElementsByClassName("parrafo");
// console.log(parrafos);

// let parrafos = document.getElementsByTagName("p");
// for (let parrafo of parrafos) {
//     console.log(parrafo);
// }


//! Métodos de acceso a elementos (un poquito más modernos 😎)

// querySelector
// querySelectorAll

//? si quiero buscar ID, uso #
//? si quiero buscar Class, uso .
//? si quiero buscar etiqueta, no uso nada

// let titulo = document.querySelector("#titulo");
// console.log(titulo);

// let parrafos = document.querySelectorAll("body > .parrafo");
// console.log(parrafos);

//! Modificar nodos

// let titulo = document.querySelector("#titulo");

// let nombre = prompt("Ingresá tu nombre");
// titulo.innerText = "Hola, " + nombre + ".";
// titulo.innerHTML = "Hola, <em>" + nombre + "</em>.";

// console.log(titulo.className);
// titulo.className = "verde secundario";


//! Agregar o quitar nodos

//? primer ejemplo
// let seccion = document.querySelector("#seccion");

// let parrafo = document.createElement("p");
// parrafo.innerText = "Hola, esto fue creado en JS.";

// seccion.append(parrafo);


//? segundo ejemplo

// let seccion = document.querySelector("#seccion");
// const productos = [
//     {
//         titulo: "Silla",
//         precio: 2000,
//         img: "./img/perrito.jpg"
//     },
//     {
//         titulo: "Mesa",
//         precio: 3000,
//         img: "./img/perrito.jpg"
//     },
//     {
//         titulo: "Ventana",
//         precio: 4000,
//         img: "./img/perrito.jpg"
//     }
// ]

// let lista = document.createElement("ul");

// productos.forEach((producto) => {
//     let item = document.createElement("div");
//     item.className = "producto";
//     item.innerHTML = `
//         <strong>${producto.titulo}</strong>
//         <p>$${producto.precio}</p>
//         <img class="imagen" src="${producto.img}">
//     `;
//     lista.append(item);
// })

// seccion.append(lista);

//! Eliminar elementos

// let titulo = document.querySelector("#titulo");
// titulo.remove();