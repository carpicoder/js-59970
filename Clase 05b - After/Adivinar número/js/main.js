function jugarAdivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100 + 1);
    
    let intentos = 0;
    let adivinado = false;
    
    while (adivinado === false) {
    
        const intento = parseInt(prompt("Intentá adivinar un número del 1 al 100."));
        intentos++;
    
        if (intento === numeroAleatorio) {
            alert("¡Felicitaciones! El número era " + numeroAleatorio + ". Lo adivinaste en " + intentos + " intentos.");
            adivinado = true;
            
            let queresJugar = confirm("¿Querés jugar nuevamente?");
            if (queresJugar === true) {
                jugarAdivinarNumero();
            } else {
                alert("¡Muchas gracias por jugar!");
            }
        } else if (intento < numeroAleatorio) {
            alert("El número es más grande. Seguí intentando.");
        } else if (intento > numeroAleatorio) {
            alert("El número es más pequeño. Seguí intentando.");
        } else {
            alert("El número no es válido. Seguí intentando.");
        }
    }
}

jugarAdivinarNumero();
