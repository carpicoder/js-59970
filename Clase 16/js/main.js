//! GET -> recibe datos del servidor
//! no hace falta usar el segundo parámetro del fetch

// const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => mostrarPosts(data))


// function mostrarPosts(posts) {
//     posts.forEach(post => {
//         let div = document.createElement("div");
//         div.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//         `;
//         document.body.append(div);
//     });
// }

//! POST -> envía datos al servidor
//! hay que usar el segundo parámetro del fetch con la info y la configuración

// let nuestroPost = {
//     userId: 1,
//     title: "Esta es la anteúltima clase de JS",
//     body: "Estamos todos muy tristes. Lorem ipsum. Lorem ipsum."
// }

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     },
//     body: JSON.stringify(nuestroPost)
// })
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))


//! EJEMPLO CON JSON PROPIO

fetch("../data.json")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach(producto => {
            let div = document.createElement("div");
            div.id = producto.id;
            div.innerHTML = `
                <h2>${producto.nombre}</h2>
                <p>$${producto.precio}</p>
                <a href="./producto.html?id=${producto.id}">Ver más</a>
            `;
            document.body.append(div);
        });
    })