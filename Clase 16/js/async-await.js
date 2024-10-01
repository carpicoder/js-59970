// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((resp) => resp.json())
//     .then((data) => {
//         data.forEach((post) => {
//             let div = document.createElement("div");
//             div.innerHTML = `
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             `;
//             document.body.append(div);
//         })
//     })


// async function pedirPosts() {
//     let resp = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await resp.json();
    
//     data.forEach((post) => {
//         let div = document.createElement("div");
//         div.innerHTML = `
//             <h2 style="border-top: 2px solid red">${post.title}</h2>
//             <p>${post.body}</p>
//         `;
//         document.body.append(div);
//     })
// }

// pedirPosts();

// const pedirPosts = async () => {

// }