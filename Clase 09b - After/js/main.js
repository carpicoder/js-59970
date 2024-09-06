// Ingresar los estudiantes con sus notas
function ingresarNotas() {
    let estudiantes = [];
    let continuar = true;

    while (continuar === true) {
        const nombre = prompt("Ingresá el nombre del estudiante");
        const nota = parseFloat(prompt("Ingresá la nota del estudiante"));

        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Ingresá una nota válida entre 0 y 10.");
        } else {
            estudiantes.push({nombre: nombre, nota: nota});
        }

        const respuesta = prompt("¿Querés agregar otro usuario? Si/No").toLowerCase();
        if (respuesta === "si") {
            continuar = true;
        } else {
            continuar = false;
        }
    }

    return estudiantes;
}


// Calcular el promedio de las notas
function calcularPromedio(estudiantes) {
    const suma = estudiantes.reduce((acc, estudiante) => acc + estudiante.nota, 0);
    const promedio = suma / estudiantes.length;
    return promedio;
}

// Encontrar los mejores estudiantes
function mejoresEstudiantes(estudiantes) {
    let mejorNota = estudiantes[0].nota;

    estudiantes.forEach(estudiante => {
        if (estudiante.nota > mejorNota) {
            mejorNota = estudiante.nota;
        }
    });

    let mejores = estudiantes.filter((estudiante) => estudiante.nota === mejorNota);

    return mejores;
}

// Encontrar los peores estudiantes
function peoresEstudiantes(estudiantes) {
    let peorNota = estudiantes[0].nota;

    estudiantes.forEach(estudiante => {
        if (estudiante.nota < peorNota) {
            peorNota = estudiante.nota;
        }
    });

    let peores = estudiantes.filter((estudiante) => estudiante.nota === peorNota);

    return peores;
}

// Mostrar aprobados y desaprobados
function mostrarAprobadosYDesaprobados(estudiantes) {
    let aprobados = [];
    let desaprobados = [];

    estudiantes.forEach((estudiante) => {
        if (estudiante.nota >= 7) {
            aprobados.push(estudiante);
        } else {
            desaprobados.push(estudiante);
        }
    });

    console.log("%c***Estudiantes aprobados***", "color: pink");
    aprobados.forEach((estudiante) => {
        console.log(estudiante.nombre + " con nota de " + estudiante.nota);
    })

    console.log("%c***Estudiantes desaprobados***", "color: pink");
    desaprobados.forEach((estudiante) => {
        console.log(estudiante.nombre + " con nota de " + estudiante.nota);
    })
}

// Función principal
function sistemaDeNotas() {
    const alumnos = ingresarNotas();

    if (alumnos.length === 0) {
        console.log("No hay estudiantes");
        return;
    }

    const promedio = calcularPromedio(alumnos);
    const mejores = mejoresEstudiantes(alumnos);
    const peores = peoresEstudiantes(alumnos);

    console.log("%c*** Promedio de notas ***", "color: pink");
    console.log(promedio.toFixed(2));

    console.log("%c*** Mejores estudiantes ***", "color: pink");
    mejores.forEach((estudiante) => console.log(estudiante.nombre + " con nota de " + estudiante.nota));

    console.log("%c*** Peores estudiantes ***", "color: pink");
    peores.forEach((estudiante) => console.log(`${estudiante.nombre} con nota de ${estudiante.nota}`))
    console.table(peores);
    
    mostrarAprobadosYDesaprobados(alumnos);

}

sistemaDeNotas();
