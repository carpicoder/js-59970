//! Math

// console.log(Math.E);
// console.log(Math.PI);

// console.log( Math.min(15, 60, 10, 9, 80, 1) );
// console.log( Math.max(15, 60, 10, 9, 80, 1) );

// console.log( Math.min(15, 60, 10, 9, 80, 1, -Infinity) );
// console.log( Math.max(15, 60, 10, 9, 80, 1, Infinity) );


// const numeros = [1, 80, 30, -10];

// const maximo = numeros.reduce((acc, num) => Math.max(acc, num), -Infinity);
// const minimo = numeros.reduce((acc, num) => Math.min(acc, num), Infinity);

// console.log(maximo);


// //! ceil => redondea siempre hacia arriba
// console.log( Math.ceil(3.1) );

// //! floor => redondea siempre hacia abajo
// console.log( Math.floor(3.99) );

// //! round => redondea hacia el entero más cercano
// console.log( Math.round(3.5) );

// //! toFixed() => achica los decimales a la cantidad que le pasemos
// const numeroLargo = 3.567899591516298292;
// console.log( parseFloat(numeroLargo.toFixed(2)) );

//! sqrt => devuelve raíz cuadrada del parámetro
// console.log( Math.sqrt(9) );



//! Math.random()

//? 0 y 9
// console.log( Math.floor(Math.random() * 10) );

//? 1 y 10
// console.log( Math.floor(Math.random() * 10 + 1) );

//? 1 y 3
// console.log( Math.floor(Math.random() * 3 + 1) );


//? 25 y 42
// console.log( Math.floor(Math.random() * 18 + 25) );

// function generarNumeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(generarNumeroAleatorio(25, 42));


//! DATE

// const hoy = new Date();
// const fechaMundial = new Date(2022, 11, 18, 12, 0);

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre"
// ]

// console.log(fechaMundial.getMonth() + 1);
// console.log(fechaMundial.getFullYear());
// console.log(fechaMundial.getDay());

// console.log( fechaMundial.toDateString() );
// console.log( fechaMundial.toLocaleString() );
// console.log( fechaMundial.toLocaleDateString() );
// console.log( fechaMundial.toTimeString() );
// console.log( fechaMundial.toLocaleTimeString() );


//? diferencia entre fechas

// const msEnUnDia = 86400000;

// console.log( Math.round((hoy - fechaMundial) / msEnUnDia) );