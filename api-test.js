const claveApi = '4fb7f5f0481f413791851832261109';
const idioma = 'es';
const ciudad = 'Huancayo'

const apiClimaActual = 'https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}';

const response = await fetch(apiClimaActual);
let data = await response.json();

console.log(data.location.localtime);