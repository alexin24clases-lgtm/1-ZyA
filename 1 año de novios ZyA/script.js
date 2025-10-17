// script.js

// --- Código para el Contador ---
document.addEventListener('DOMContentLoaded', function() {
    const fechaInicio = new Date('October 18, 2024 00:00:00'); // Fecha de inicio de la relación
    const elementoContador = document.getElementById('contador-dias');

    function actualizarContador() {
        const ahora = new Date();
        // Calcula la diferencia en milisegundos
        const diferencia = ahora - fechaInicio;
        // Convierte la diferencia a días
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

        // Actualiza el contenido del div con el número de días
        elementoContador.textContent = dias;
    }

    // Actualiza el contador inmediatamente al cargar la página
    actualizarContador();
    // Actualiza el contador cada minuto (60000 ms) para mayor precisión si es necesario
    setInterval(actualizarContador, 60000);

    // --- Código para los Corazones ---
    const container = document.getElementById('corazones-container');
    const corazones = ['❤️', '💖', '💘', '💕', '💗', '💓', '💞', '💝'];

    function crearCorazon() {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon');
        corazon.textContent = corazones[Math.floor(Math.random() * corazones.length)];
        corazon.style.left = Math.random() * 100 + 'vw';
        const tamano = Math.random() * 1 + 1;
        corazon.style.fontSize = tamano + 'em';
        const duracion = Math.random() * 4 + 6;
        corazon.style.animationDuration = duracion + 's';
        container.appendChild(corazon);

        setTimeout(() => {
            if (corazon.parentNode) {
                corazon.parentNode.removeChild(corazon);
            }
        }, duracion * 1000);
    }

    setInterval(crearCorazon, 300);

    // --- Código para Abrir la Carta ---
    const cartaCerrada = document.getElementById('carta-cerrada');
    const contenidoPrincipal = document.getElementById('contenido-principal');
    const body = document.body;

    cartaCerrada.addEventListener('click', function() {
        // Animar la carta para que desaparezca
        cartaCerrada.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cartaCerrada.style.opacity = '0';

        // Esperar un momento para que se vea la animación antes de ocultarla
        setTimeout(function() {
            cartaCerrada.style.display = 'none'; // Oculta la carta
            contenidoPrincipal.classList.remove('contenido-oculto'); // Muestra el contenido principal
            body.style.backgroundColor = '#fff5f5'; // Restaura el color de fondo original o el que desees
        }, 500); // 500ms, debe coincidir con la duración de la transición CSS
    });
});