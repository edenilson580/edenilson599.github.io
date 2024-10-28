let preguntas = [
    { pregunta: "¿Cuánto es 12 + 8?", respuestas: [20, 19, 21], correcta: 0 },
    { pregunta: "¿Cuánto es 15 - 7?", respuestas: [8, 6, 7], correcta: 0 },
    { pregunta: "¿Cuánto es 24 ÷ 3?", respuestas: [8, 9, 7], correcta: 0 },
    { pregunta: "¿Cuánto es 9 + 6?", respuestas: [15, 16, 14], correcta: 0 },
    { pregunta: "¿Cuánto es 18 - 9?", respuestas: [9, 8, 10], correcta: 0 },
    { pregunta: "¿Cuánto es 14 ÷ 2?", respuestas: [7, 8, 9], correcta: 0 },
    { pregunta: "¿Cuánto es 3 + 17?", respuestas: [20, 19, 21], correcta: 0 },
    { pregunta: "¿Cuánto es 10 - 2?", respuestas: [8, 6, 9], correcta: 0 },
    { pregunta: "¿Cuánto es 22 ÷ 11?", respuestas: [2, 3, 1], correcta: 0 },
    { pregunta: "¿Cuánto es 25 - 10?", respuestas: [15, 14, 16], correcta: 0 },
    { pregunta: "¿Cuánto es 30 ÷ 5?", respuestas: [6, 7, 5], correcta: 0 },
    { pregunta: "¿Cuánto es 13 + 7?", respuestas: [20, 19, 18], correcta: 0 },
    { pregunta: "¿Cuánto es 8 - 4?", respuestas: [4, 5, 3], correcta: 0 },
    { pregunta: "¿Cuánto es 16 ÷ 4?", respuestas: [4, 5, 3], correcta: 0 },
    { pregunta: "¿Cuánto es 21 - 6?", respuestas: [15, 14, 16], correcta: 0 },
    { pregunta: "¿Cuánto es 4 + 5?", respuestas: [9, 8, 10], correcta: 0 },
];

let puntos = 0;
let tiempo = 25;
let preguntaActual;
let temporizador;

function iniciarJuego() {
    tiempo = 25;
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



