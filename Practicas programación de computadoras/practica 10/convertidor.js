function convertir() {

    let tipoconversion = document.getElementById('tipo-conversion').value;

    let temperatura = document.getElementById('temperatura').value;

    if (isNaN(temperatura) || temperatura.trim() === "") {
        document.getElementById('resultado').innerHTML = "Por favor, ingrese un número válido.";
        return;
    }

    temperatura = parseFloat(temperatura);

    let resultado;

    if (tipoconversion === "1") {
        resultado = (temperatura * 9 / 5) + 32;
        document.getElementById('resultado').innerHTML = 
            `Resultado: ${temperatura}°C = ${resultado.toFixed(2)}°F`;
    } else if (tipoconversion === "2") { 
        resultado = (temperatura - 32) * 5 / 9;
        document.getElementById('resultado').innerHTML = 
            `Resultado: ${temperatura}°F = ${resultado.toFixed(2)}°C`;
    } else {
        document.getElementById('resultado').innerHTML = "Seleccione un tipo de conversión válido.";
    }
}

//fahrenheit a celsius

function convertirFahrenheitACelsius() {

    let temperatura = document.getElementById('temperatura').value;

    if (isNaN(temperatura) || temperatura.trim() === "") {
        document.getElementById('resultado').innerHTML = "Por favor, ingrese un número válido.";
        return;
    }

    temperatura = parseFloat(temperatura);

    let resultado = (temperatura - 32) * 5 / 9;

    document.getElementById('resultado').innerHTML = 
        `Resultado: ${temperatura}°F = ${resultado.toFixed(2)}°C`;
}
