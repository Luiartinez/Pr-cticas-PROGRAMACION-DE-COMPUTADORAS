console.log("menu de opciones");
console.log("1 mostrar el numero mayor de un arreglo");
console.log("2 imprimir el total de vocales y mostrar cuales son de una cadena\n");

let opcion = 1;

switch (opcion) {
    case 1:
        console.log("has ingresado a la opcion 1\n");
        let number = [5, 3, 10, 25, 85, 86];

        numeromayorArray(number);
        break;

    case 2:
        console.log("has ingresado a la opcion 2\n");
        let texto = "luis";

        let resultado = contarvocales(texto);

        console.log("total de vocales en la palabra " + texto + " es: " + resultado.cantidadvocales);
        console.log("vocales encontradas sin repetir en " + texto + " son: " + resultado.vocales);
        break;

    default:
        console.log("elija una opcion correcta entre 1 - 2 ");
        break;
}

function numeromayorArray(numeros) {
    let maximo = numeros[0];

    for (let i = 1; i < numeros.length; i++) { 
        if (numeros[i] > maximo) { 
            maximo = numeros[i];
        }
    }

    console.log(`el numero maximo del arreglo es: ${maximo}`);
}

function contarvocales(cadena) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    let vocalesencontradas = [];

    for (let letra of cadena.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
            vocalesencontradas.push(letra);
        }
    }

    let vocalesunicas = [...new Set(vocalesencontradas)];

    return {
        cantidadvocales: contador,
        vocales: vocalesunicas
    };
}