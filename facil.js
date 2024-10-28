let preguntas = [
    { pregunta: "¿Cuánto es 2 + 2?", respuestas: [4, 3, 5], correcta: 0 },
    { pregunta: "¿Cuánto es 3 + 5?", respuestas: [8, 7, 9], correcta: 0 },
    { pregunta: "¿Cuánto es 7 - 4?", respuestas: [3, 2, 5], correcta: 0 },
    { pregunta: "¿Cuánto es 10 - 6?", respuestas: [4, 3, 5], correcta: 0 },
    { pregunta: "¿Cuánto es 6 + 2?", respuestas: [8, 9, 7], correcta: 0 },
    { pregunta: "¿Cuánto es 9 - 3?", respuestas: [6, 5, 4], correcta: 0 },
    { pregunta: "¿Cuánto es 5 + 4?", respuestas: [9, 10, 8], correcta: 0 },
    { pregunta: "¿Cuánto es 2 + 3?", respuestas: [5, 4, 6], correcta: 0 },
    { pregunta: "¿Cuánto es 1 + 1?", respuestas: [2, 3, 1], correcta: 0 },
    { pregunta: "¿Cuánto es 5 - 2?", respuestas: [3, 4, 5], correcta: 0 },
    { pregunta: "¿Cuánto es 4 + 4?", respuestas: [8, 7, 9], correcta: 0 },
    { pregunta: "¿Cuánto es 8 - 3?", respuestas: [5, 6, 4], correcta: 0 },
    { pregunta: "¿Cuánto es 12 - 8?", respuestas: [4, 5, 3], correcta: 0 },
    { pregunta: "¿Cuánto es 3 + 3?", respuestas: [6, 7, 5], correcta: 0 },
    { pregunta: "¿Cuánto es 10 - 1?", respuestas: [9, 8, 7], correcta: 0 },
];

let puntos = 0;
let tiempo = 25;
let preguntaActual;
let temporizador;

function iniciarJuego() {
    puntos = 0; 
    document.getElementById("puntosGanados").innerText = `Puntos almacenados: ${puntos}`;
    mostrarPregunta();
}

function mostrarPregunta() {
    if (preguntas.length === 0) {
        mostrarFelicitaciones();
        return;
    }
    preguntaActual = preguntas[Math.floor(Math.random() * preguntas.length)];
    const index = preguntas.indexOf(preguntaActual);
    preguntas.splice(index, 1); 

    document.getElementById("pregunta").innerText = preguntaActual.pregunta;

    const opciones = document.querySelectorAll(".opcion");
    let respuestas = [...preguntaActual.respuestas];
    respuestas.sort(() => Math.random() - 0.5); 

    opciones.forEach((opcion, i) => {
        opcion.innerText = respuestas[i];
        opcion.onclick = () => verificarRespuesta(respuestas[i]);
    });

    tiempo = 25; 
    document.getElementById("temporizador").innerText = tiempo;
    clearInterval(temporizador); 
    iniciarTemporizador(); 
}

function verificarRespuesta(respuesta) {
    clearInterval(temporizador);
    if (respuesta === preguntaActual.respuestas[preguntaActual.correcta]) {
        puntos += 10; 
        document.getElementById("puntosGanados").innerText = `Puntos almacenados: ${puntos}`;
        mostrarPregunta();
    } else {
        document.getElementById("pregunta").innerText = "Respuesta incorrecta";
        setTimeout(() => {
            window.location.href = "menu.html";
        }, 3000);
    }
}

function mostrarFelicitaciones() {
    document.getElementById("pregunta").innerText = "¡Felicidades! Completaste el nivel.";
    setTimeout(() => {
        window.location.href = "menu.html"; 
    }, 3000);
}

function iniciarTemporizador() {
    temporizador = setInterval(() => {
        tiempo--;
        document.getElementById("temporizador").innerText = tiempo;
        if (tiempo <= 0) {
            clearInterval(temporizador);
            document.getElementById("pregunta").innerText = "Se acabó el tiempo";
            setTimeout(() => {
                window.location.href = "menu.html";
            }, 3000);
        }
    }, 1000);
}


window.onload = iniciarJuego;



