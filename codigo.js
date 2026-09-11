const claveApi = '4fb7f5f0481f413791851832261109';
const idioma = 'es';
const inpCiudad = document.getElementById('input-ciudad');

async function obtenerClima() {
    const ciudad = inpCiudad.value.trim();

    if (!ciudad) {
        alert('Por favor, ingrese una ciudad');
        return;
    }

    // Uso de comillas invertidas `` para interpolación de variables
    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

    try {
        const response = await fetch(apiClimaActual);
        
        if (!response.ok) {
            alert('Ciudad no encontrada');
            return;
        }

        const data = await response.json();
        mostrarClima(data);
    } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error al consultar el clima.');
    }
}

function mostrarClima(data) {
    document.querySelector('.clima-icono').src = "https:" + data.current.condition.icon;
    document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
    document.querySelector('.temp').innerHTML = Math.round(data.current.temp_c) + '°C';
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
    document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';
}