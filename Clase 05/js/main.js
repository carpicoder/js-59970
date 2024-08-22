//! Objeto literal

// const usuario = {
//     nombre: "Carpi",
//     edad: 29,
//     pais: "Argentina",
//     direccion: "Calle 123",
//     casado: true,
//     cursos: {
//         desarrolloweb: "Aprobado",
//         javascript: "En curso"
//     }
// }

// console.log( usuario.cursos.desarrolloweb );
// console.log( usuario["cursos"].desarrolloweb );
// console.log( usuario["cursos"]["desarrolloweb"] );
// console.log( usuario.cursos["desarrolloweb"] );

// console.log( usuario.nombre );
// console.log( usuario["nombre"] );

//? objeto.propiedad
//? objeto["propiedad"]

// let propiedadParaVer = prompt("Ingresá qué propiedad querés ver");
// console.log( usuario[propiedadParaVer] )

// Object.freeze(usuario);
// Object.seal(usuario);

// usuario.nombre = "Nico";
// usuario["edad"] = 30;
// usuario.camiseta = "Negra";

// console.log(usuario);

//! Constructor

// function Usuario(nombre, edad, pais) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.pais = pais;
//     this.rol = "Principiante";
// }

// const usuario1 = new Usuario("Carpi", 29, "Argentina");
// const usuario2 = new Usuario("Alex", 27, "Argentina");

// console.log(usuario1.nombre);
// console.log(usuario2);

//! Métodos

// function Usuario(nombre, edad, pais) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.pais = pais;
//     this.rol = "Principiante";
//     this.saludar = function() {
//         console.log("Hola, " + this.nombre);
//     }
// }

// const usuario1 = new Usuario("Carpi", 29, "Argentina");

// usuario1.saludar();

//? Objeto literal con método

// const usuario = {
//     nombre: "Carpi",
//     edad: 29,
//     pais: "Argentina",
//     saludar: function() {
//         console.log("Hola, " + this.nombre);
//     }
// }

// usuario.saludar();

//! Operador / Ciclo for...in

// const usuario = {
//     nombre: "Carpi",
//     edad: 29,
//     pais: "Argentina",
// }

//? chequeo si existe una propiedad en un objeto
// console.log( "nombre" in usuario ) // true
// console.log( "cursos" in usuario ) // false

// for ( let propiedad in usuario ) {
//     console.log( propiedad + ": " + usuario[propiedad] )
// }


//! Clases

// class Usuario{
//     constructor(nombre, edad, pais) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.pais = pais;
//     }
//     saludar() {
//         console.log("Hola, " + this.nombre)
//     }
// }

// const usuario1 = new Usuario("Carpi", 29, "Argentina");

// console.log(usuario1.saludar());