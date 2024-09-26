const baseDeDatos = [
    { id: "silla", nombre: "Silla", precio: 1500 },
    { id: "sillon", nombre: "Sillón", precio: 2500 },
    { id: "puerta", nombre: "Puerta", precio: 3500 },
    { id: "ventana", nombre: "Ventana", precio: 4500 }
];

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(baseDeDatos);
        }, 1500);
    })
}

let productos = [];

let select = document.querySelector("#lista-productos");

pedirProductos()
    .then((respuesta) => {
        productos = respuesta;
        mostrarProductos(productos);
    })


function mostrarProductos(array) {
    array.forEach(item => {
        let option = document.createElement("option");
        option.innerText = `${item.nombre} - $${item.precio}`;
        select.append(option);
    })
}