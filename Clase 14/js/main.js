//! sweeAlert

// let sweetAlertButton = document.querySelector("#sweetalert");

// let productosLength = 23;

// sweetAlertButton.addEventListener("click", () => {


//     Swal.fire({
//         title: "Hola, mundo!",
//         icon: "warning",
//         imageUrl: "../img/perrito.jpg",
//         iconColor: "green",
//         html: "Hola, esta es mi web: <a href='https://carpicoder.com'>Carpi Coder</a>",
//         showCloseButton: true,
//         customClass: "mi-popup",


//         showConfirmButton: true,
//         showCancelButton: true,
//         showDenyButton: true,


//         confirmButtonText: "Confirmar!",
//         cancelButtonText: "Descartar!",
//         denyButtonText: "No, por favor no!"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire("Perfecto! Se borraron tus " + productosLength + " productos.");
//         } else if (result.isDenied) {
//             Swal.fire("Genial! Tus productos siguen en tu carrito");
//         }
//     });


// })


//! Toastify JS

// let toastifyButton = document.querySelector("#toastify");
// let contador = 0;

// toastifyButton.addEventListener("click", () => {
//     contador++;

//     Toastify({
//         text: contador%2 === 0 ? "Hola" : "Chau",
//         duration: 10000,
//         // destination: "https://carpicoder.com",
//         // newWindow: true,
//         close: true,
//         gravity: "top",
//         position: "right",
//         avatar: "../img/perrito.jpg",
//         className: "mi-tostada",
//         stopOnFocus: true,
//         onClick: () => {
//             console.log("apretado!");
//         },
//         style: {
//             background: contador%2 === 0 ? "linear-gradient(to right, red, blue)" : "linear-gradient(45deg, red, yellow, blue, black, white, green)",
//             color: "black",
//             borderRadius: "10px"
//         }
//     }).showToast();


// })

//! Luxon

let DateTime = luxon.DateTime;
let Duration = luxon.Duration;
let Interval = luxon.Interval;

// const dt = DateTime.local(2022, 12, 18);
// console.log(dt);

const mundial = DateTime.fromObject({
    day: 18,
    month: 12,
    year: 2022,
    hour: 18
})

const hoy = DateTime.now();

// console.log(hoy.year); // año
// console.log(hoy.month); // mes
// console.log(hoy.day); // día
// console.log(hoy.weekday); // día de la semana
// console.log(hoy.zoneName); // nombre de zona horaria
// console.log(hoy.daysInMonth); // cant. de días en el mes

// console.log( hoy.toLocaleString() );
// console.log( hoy.toLocaleString(DateTime.DATE_SHORT) );
// console.log( hoy.toLocaleString(DateTime.DATE_MED) );
// console.log( hoy.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY) );
// console.log( hoy.toLocaleString(DateTime.DATE_FULL) );
// console.log( hoy.toLocaleString(DateTime.DATE_HUGE) );

// console.log( hoy.toLocaleString(DateTime.TIME_SIMPLE) );

// console.log( hoy.toLocaleString(DateTime.DATETIME_SHORT) );


// console.log( hoy.setLocale("es-AR").toLocaleString(DateTime.DATE_HUGE) );

//? duration

// const dur = Duration.fromObject({ hours: 1, minutes: 30 });

// const dentroDeHoraYMedia = hoy.plus(dur);
// console.log(dentroDeHoraYMedia.toLocaleString(DateTime.DATETIME_SHORT));

// const haceHoraYMedia = hoy.minus(dur);
// console.log(haceHoraYMedia.toLocaleString(DateTime.DATETIME_SHORT));

//? interval

// const intervalo = Interval.fromDateTimes(mundial, hoy);

// console.log( intervalo.length("days") );
// console.log( intervalo.length("hours") )
// console.log ( intervalo.length("minutes") );
// console.log ( intervalo.length("seconds") );

// const intervalo2 = hoy.diff(mundial, ["years", "months", "days", "hours", "minutes", "seconds"])

// let values = intervalo2.values;

// console.log(`
//     El mundial pasó hace ${values.years} año, ${values.months} meses, ${values.days} días, ${values.hours} horas.
//     `);