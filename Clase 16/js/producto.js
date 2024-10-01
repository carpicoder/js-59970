let productoContainer = document.querySelector("#producto");

const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get("id");

fetch("../data.json")
    .then(resp => resp.json())
    .then(data => {
        let productoEncontrado = data.find((prod) => prod.id === productoId);
        
        let div = document.createElement("div");
        div.innerHTML = `
            <h1>${productoEncontrado.nombre}</h1>
            <p>$${productoEncontrado.precio}</p>
        `;

        productoContainer.append(div);
    })