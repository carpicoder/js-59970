let botonAlerta = document.querySelector("#alerta");

//! 1. Con el método addEventListener()

// botonAlerta.addEventListener("click", mostrarAlerta);

// function mostrarAlerta() {
//     alert("Hola, mundo!");
// }

// botonAlerta.addEventListener("click", () => {
//     alert("Hola, mundo!");
// })

// botonAlerta.addEventListener("click", function() {
//     alert("Hola, mundo!");
// })

//! 2. Con la palabrita on+event (onevent)

// botonAlerta.onclick = () => {
//     alert("Hola, mundo!");
// }

// botonAlerta.onclick = function() {
//     alert("Hola!")
// }

// botonAlerta.onclick = mostrarAlerta;


//! ********************************************

//! mousedown

// let contador = 1;

// botonAlerta.addEventListener("mousedown", () => {
//     console.log("Ejecutado " + contador);
//     contador++;
// })

//! mouseup

// let contador = 1;

// botonAlerta.addEventListener("mouseup", () => {
//     console.log("Ejecutado " + contador);
//     contador++;
// })

//! mouseover

// let contador1 = 1;

// botonAlerta.addEventListener("mouseover", () => {
//     console.log("Entró a alerta " + contador1);
//     contador1++;
// })

//! mouseout

// let contador2 = 1;

// botonAlerta.addEventListener("mouseout", () => {
//     console.log("Salió de alerta " + contador2);
//     contador2++;
// })

//! mousemove

// document.body.addEventListener("mousemove", (event) => {
//     console.log(event.clientX, event.clientY)
// })


//! EJEMPLO DE MODO OSCURO

// let botonColorMode = document.querySelector("#color-mode");

// botonColorMode.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");

//     if (document.body.classList.contains("dark-mode")) {
//         botonColorMode.innerText = "☀️";
//         // document.body.classList.remove("dark-mode");
//     } else {
//         botonColorMode.innerText = "🌙";
//         // document.body.classList.add("dark-mode");
//     }
// })


const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");
const alertaSubmit = document.querySelector("#alerta-submit");

//! keydown

// alertaInput.addEventListener("keydown", (e) => {
//     console.log(e.target.value);
// })

//! keyup

// alertaInput.addEventListener("keyup", (e) => {
//     console.log(e.target.value);
// })

//! change

// alertaInput.addEventListener("change", (e) => {
//     console.log(e.target.value);
// })

//! input

// alertaInput.addEventListener("input", (e) => {
//     console.log(e.target.value);
// })

//! submit

// alertaForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     alert(alertaInput.value);
// })

//! EJEMPLO DE MOSTRAR ABAJO

// const abajoInput = document.querySelector("#abajo-input");
// const abajoParrafo = document.querySelector("#abajo");

// abajoInput.addEventListener("input", () => {
//     abajoParrafo.innerText = abajoInput.value;
// })


//! EJEMPLO DE AGREGAR ÍTEM A LISTA

// const lista = document.querySelector("#agregar");
// const agregarForm = document.querySelector("#agregar-form");
// const agregarInput = document.querySelector("#agregar-input");
// const agregarSubmit = document.querySelector("#agregar-submit");

// agregarForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (agregarInput.value !== "") {

//         const liNuevo = document.createElement("li");
//         liNuevo.classList.add("item");
    
//         const spanTexto = document.createElement("span");
//         spanTexto.innerText = agregarInput.value;
//         liNuevo.append(spanTexto);
    
//         const spanEliminar = document.createElement("span");
//         spanEliminar.className = "item-eliminar";
//         spanEliminar.innerText = "❌";
//         spanEliminar.addEventListener("click", () => {
//             liNuevo.remove();
//         })
    
//         liNuevo.append(spanEliminar);
    
//         lista.append(liNuevo);
//     }

//     agregarForm.reset();
//     agregarInput.focus();
// })