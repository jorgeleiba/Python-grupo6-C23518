// URL de la API de WorldTimeAPI para obtener la hora actual de una ubicación específica
const timeApiUrl = 'http://worldtimeapi.org/api/ip';

// Función para obtener y mostrar la hora actual
function getAndDisplayCurrentTime() {
const timeResultElement = document.getElementById('timeResult');

// Función para realizar una solicitud GET para la API de WorldTimeAPI
function fetchTimeFromAPI() {
    fetch(timeApiUrl)
        .then(response => response.json())
        .then(data => {
        const currentTime = new Date(data.utc_datetime);
        const timeZone = data.timezone;
        timeResultElement.innerHTML = `Hora actual en ${timeZone}: ${currentTime.toLocaleTimeString()}`;
    })
        .catch(error => {
        console.error('Error al consumir la API de hora:', error);
    });
}
// Actualizar la hora cada 1 seg
setInterval(fetchTimeFromAPI, 1000);
}
// Llamar a la función para mostrar la hora
getAndDisplayCurrentTime();
