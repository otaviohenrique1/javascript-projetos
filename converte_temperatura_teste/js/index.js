/* framework javascript teste */
const campoTexto = document.querySelector('#campo-texto');
const campoConversaoTemperaturaMetodo = document.querySelector('#campo-conversao-temperatura-metodo');
const campoTextoResultado = document.querySelector('#campo-texto-resultado');
const botaoCampoTextoResultado = document.querySelector('#botao-campo-texto-resultado');

botaoCampoTextoResultado.addEventListener('click', () => {
    let conversaoTemperaturaMetodoValor = campoConversaoTemperaturaMetodo.value;
    let valor = campoTexto.value;
    if (conversaoTemperaturaMetodoValor == 'celsius_para_fahrenheit') {
        campoTextoResultado.innerHTML = converteCelsiusParaFahrenheit(valor);
    } else if (conversaoTemperaturaMetodoValor == 'celsius_para_kelvin') {
        campoTextoResultado.innerHTML = converteCelsiusParaKelvin(valor);
    } else if (conversaoTemperaturaMetodoValor == 'fahrenheit_para_kelvin') {
        campoTextoResultado.innerHTML = converteFahrenheitParaKelvin(valor);
    } else if (conversaoTemperaturaMetodoValor == 'fahrenheit_para_celsius') {
        campoTextoResultado.innerHTML = converteFahrenheitParaCelsius(valor);
    } else if (conversaoTemperaturaMetodoValor == 'kelvin_para_fahrenheit') {
        campoTextoResultado.innerHTML = converteKelvinParaFahrenheit(valor);
    } else if (conversaoTemperaturaMetodoValor == 'kelvin_para_celsius') {
        campoTextoResultado.innerHTML = converteKelvinParaCelsius(valor);
    }
    // campoTextoResultado.innerHTML = valor;
});

function converteCelsiusParaFahrenheit(temperaturaCelsius) {
    // grau Celsius para grau Fahrenheit -> °F = °C × 1,8 + 32
    // [°F] = [°C] × 1,8 + 32
    let temperaturaFahrenheit = parseFloat(temperaturaCelsius) * 1.8 + 32;
    return temperaturaFahrenheit;
}

function converteCelsiusParaKelvin(temperaturaCelsius) {
    // grau Celsius para kelvin -> K = °C + 273,15
    // [K] = [°C] + 273,15
    let temperaturaKelvin = parseFloat(temperaturaCelsius) + 273.15;
    return temperaturaKelvin;
}

function converteFahrenheitParaCelsius(temperaturaFahrenheit) {
    // grau Fahrenheit para grau Celsius -> °C = (°F − 32) / 1,8
    // [°C] = ([°F] − 32) / 1,8
    let temperaturaCelsius = (parseFloat(temperaturaFahrenheit) - 32) / 1.8;
    return temperaturaCelsius;
}

function converteFahrenheitParaKelvin(temperaturaFahrenheit) {
    // Fahrenheit para grau kelvin -> K = (°F + 459,67) / 1,8
    // [K] = ([°F] + 459,67) / 1,8
    let temperaturaKelvin = (parseFloat(temperaturaFahrenheit) + 459.67) / 1.8;
    return temperaturaKelvin;
}

function converteKelvinParaCelsius(temperaturaKelvin) {
    // kelvin para grau Celsius -> °C = K − 273,15
    // [°C] = [K] - 273,15
    let temperaturaCelsius = parseFloat(temperaturaKelvin) - 273.15;
    return temperaturaCelsius;
}

function converteKelvinParaFahrenheit(temperaturaKelvin) {
    // kelvin para grau Fahrenheit -> °F = K × 1,8 - 459,67
    // [°F] = [K] × 1,8 - 459,889
    let temperaturaFahrenheit = parseFloat(temperaturaKelvin) * 1.8 - 459.67;
    return temperaturaFahrenheit;
}