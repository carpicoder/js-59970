//1)Operador Ternario:

//Sintaxis: condicion ? codigoSiEsVerdad : condigoSiEsFalso

let llueve = true
console.log(llueve ? "comer tortas fritas y netflix" : "nos vamos a la plaza")

let respuesta = llueve ? "toratas fritas y netflix" : "hacemos un asado y tomamos fernet"

console.log(respuesta)


//2) Desestructuracion de objetos:
//es una expresion de JS que me permite desempaquetar valores de arrays u objeots en distintas variables

const bart = {
    nombre: "Bart",
    apellido: "Simpson",
    edad: 10,
    escuela: "Sprinfield Elementary School"
}

console.log(bart.nombre)

let {nombre, apellido, edad, escuela} = bart

console.log(nombre)

let{nombre:nombrecilio} = bart

nombrecilio = "Tinki Winki"
console.log(nombrecilio)
console.log(bart.nombre)

//Desestructuracion mas profunda:

const producto = {
    nombre: "Celular Samsung",
    precio: 1000000,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1mt"
    }
}

const {nombre: nombreCelular, informacion:{peso, medida}} = producto

console.log(peso)

//Desestructuracion de arrays:

let frutas = ["Manzana", "Pera", "Naranja", "Quinoto"]
/* 
let [fruta0, fruta1, fruta2, fruta3] = frutas 
console.log(fruta2)
*/



let[fruta2, fruta3] = frutas
console.log(fruta2)

let [,, fruta, frutita] = frutas
console.log(frutita)


////////////////////////////////////////////

//Operador Spread: (...) Operador de Propagacion
//Lo usamos con elementos iterables (arrays, objetos), enviando cada uno de sus elementos como parametros a una funcion

const nombres = ["Juan", "Pedro", "Maria", "Jose"]

console.log(nombres)

console.log(...nombres)

//es lo mimso que yo haga esto:

console.log(nombres[0], nombres[1], nombres[2], nombres[3])

//Podemos copiar arrays y unirlos
const a = [1,2,3,4]
const b = [5,6,7,8,9,10]

const nuevoArray = [...a, ...b]

console.log(nuevoArray)


//Copiar objetos:

const alumno = {
    nombre: "Coki",
    apellido: "Argento",
    edad: 37
}

console.log(alumno)

//que pasa si hago esto? es decir igualar objetos

const alumnoDos = alumno

//si hago esto estoy copiando la referencia de memoria
console.log(alumnoDos)

/* alumnoDos.nombre = "Pepe"
console.log(alumno) */

//para copiar obejtos de forma correcta tenemos que usar el operador spread

const alumnoTres = {...alumno}
console.log(alumnoTres)

alumnoTres.nombre = "Fatiga"

console.log(alumno)
console.log(alumnoTres)


//4) Operador Rest:
//Permite recopilar el numero indefinido de argumentos o elemntos en un unico array, lo que faciilita trabajar con funciones y parametros sin saber cuantos valores se van a psar. Se utilkiza colocando tres (...) delante del nombre del aprametro.


//con funciones

function sumar (...numeros) {
    return numeros.reduce((total,num) =>total +num, 0)
}

console.log(sumar(1,2,3))
console.log(sumar(5,10,15,20))

//si tenemos otro parametro y lo pasamos como ultimo, se rompe

/* function ejemploInvalido (...args, otroParametro) {
    
} */

function ejemploValido(primerParametro, segundoParametro, ...restoDeParametros) {
    console.log(primerParametro)
    console.log(segundoParametro)
    console.log(restoDeParametros)
}



ejemploValido(1,2,3,4)


//Desestructuracion con rest: 

const [primero, segundo, ...resto] = [1,2,3,4,5]
console.log(primero)
console.log(segundo)
console.log(resto)

const persona = {nombre: "Ale", edad: 30, profesion: "Ingeniero"}
const {nombre: nombrePersona, ...restante} = persona

console.log(nombrePersona)
console.log(restante)


//structured Clone

const objeto= {
    nombreObjeto:"Vaso",
    precio: 1000
}

const objetoCopiado = structuredClone(objeto)

console.log(objetoCopiado)

objetoCopiado.nombreObjeto = "Monitor"


console.log(objeto)

console.log(objetoCopiado)


const original = {
    a:1,
    b: {c:2}
}

const copia = {...original}

copia.b.c = 42

console.log(original.b.c)

const original2 = {
    a:1,
    b: {c:2}
}

const copia2= structuredClone(original2)

copia2.b.c = 42

console.log(original2.b.c)