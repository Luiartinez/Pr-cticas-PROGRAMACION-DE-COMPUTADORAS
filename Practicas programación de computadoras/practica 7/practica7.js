console.log("Menú de opciones");
console.log("1. Convertir un string o un array de strings a mayúsculas");
console.log("2. Convertir un string o un array de strings a minúsculas\n");

let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Has ingresado a la opción 1\n");

        let cadenaNombre = "Luis Alexander Martinez";
        let arregloNombres = ["roberto", "julio", "karen", "alexander"];

        // Invocamos la función mayúscula
        console.log("Imprimiendo cadena de texto en mayúsculas:");
        console.log(convertirMayuscula(cadenaNombre));
        console.log("\nImprimiendo texto de array en mayúsculas:");
        console.log(convertirMayuscula(arregloNombres));
        break;

    case 2:
        console.log("Has ingresado a la opción 2\n");

        let textoVehiculo = "mazda";
        let arrayVehiculo = ["toyota", "nissan", "ford", "hyundai"];

        // Invocamos la función de minúsculas
        console.log("Imprimiendo cadena de texto en minúsculas:");
        console.log(convertirMinuscula(textoVehiculo));
        console.log("\nImprimiendo cadena de array en minúsculas:");
        console.log(convertirMinuscula(arrayVehiculo));
        break;

    default:
        console.log("Elija una opción correcta entre 1 - 2.");
        break;
}

// Función para convertir a mayúsculas
function convertirMayuscula(cadena) {
    if (Array.isArray(cadena)) {
        // Usamos map para iterar cada elemento del arreglo
        return cadena.map(item => item.toUpperCase());
    } else if (typeof cadena === 'string') {
        // Convertimos la cadena a mayúsculas
        return cadena.toUpperCase();
    } else {
        return "Error: el dato ingresado debe ser un string o un array de tipo string.";
    }
}

// Función para convertir a minúsculas
function convertirMinuscula(texto) {
    if (Array.isArray(texto)) {
        return texto.map(item => item.toLowerCase());
    } else if (typeof texto === 'string') {
        return texto.toLowerCase();
    } else {
        return "Error: el dato ingresado debe ser un string o un array de tipo string.";
    }
}
