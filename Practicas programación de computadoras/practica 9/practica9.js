// Declarando constante
const prompt = require('prompt-sync')();

// Iniciar variable opcion fuera del ciclo
let opcion;

// Utilizando un Do-while
do {
    console.log("Menu de opciones");
    console.log("1. Programa que realiza el cálculo del salario");
    console.log("2. Programa que realiza la búsqueda de un libro");
    console.log("3. Salir\n");

    opcion = prompt("Ingrese una opción: ");
    opcion = parseInt(opcion);

    switch (opcion) {
        case 1:
            console.log("Programa que calcula el salario final");

            let ingresos = [{ salario: 600 }, { horasextras: 25 }, { isss: 13.50 }, { Afp: 29 }];
            
            // Corregir el cálculo del salario a pagar
            let salarioBase = ingresos[0].salario + ingresos[1].horasextras;
            let deducciones = ingresos[2].isss + ingresos[3].Afp;
            let salariopago = salarioBase - deducciones;

            console.log("Total a pagar es: " + salariopago);

            if (salariopago > 365.00 && salariopago < 500) {
                console.log("Tu salario neto es mayor al salario mínimo.");
            } else if (salariopago > 500) {
                console.log("Eres un agente de retención de renta.");
            } else {
                console.log("Tu salario es menor al mínimo y no se retiene ISR.");
            }
            break;

        case 2:
            console.log("Programa que selecciona el libro buscado\n");

            let biblioteca = [
                { libro: "Risitos de oro", genero: "Cuentos" },
                { libro: "Harry Potter y la piedra filosofal", genero: "Mágico" },
                { libro: "Comer, amar y rezar", genero: "Romance" },
                { libro: "Cura mortal", genero: "Ficción" }
            ];

            console.log("Búsqueda del libro por género\n");

            let generarbuscado = prompt("Ingrese el género del libro a buscar: ");
            const libroencontrado = biblioteca.find(libro => libro.genero.toLowerCase() === generarbuscado.toLowerCase());

            if (libroencontrado) {
                console.log("\nEl libro encontrado es: " + libroencontrado.libro);
            } else {
                console.log("Género no encontrado, ingrese uno válido.");
            }
            break;

        case 3:
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Ingrese una opción correcta.");
            break;
    }
} while (opcion !== 3);