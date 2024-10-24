console.log("menu de opciones");
console.log("1 funciones de calculo de salario");
console.log("2 funciones para calculo de descuentos");
console.log("3 funciones para calculo de area de rectangulo /n");

let opcion =1;

switch (opcion) {
    case 1:

    console.log("has ingresado la opcion 1/n");

    let argumentohoras=45;
    let argumentopreciohoras=15;

    console.log("el salario total es: $"+calcularsalario(argumentohoras,argumentopreciohoras));
    break;
    case 2:

    console.log("has ingresado a la opcion 2/n")

    let argumentocantidad =50;
    let argumentodescuento =15;

    console.log("el descuento aplicado es " +argumentodescuento+"%" +"y la cantidad final es : $" +calculardescuento(argumentocantidad,argumentodescuento));

    break;

    case 3:

    break;

    default:
        console.log("elija una correcta entre 1 - 3 ");
        break;
}

function calcularsalario(horastrabajadas,preciohora){

    let salariototal = horastrabajadas*preciohora;
    return salariototal;
}

function calculardescuento (cantidad, descuento){

    let pordescuento=descuento / 100;

    let descuentototal = cantidad*pordescuento;

    let cantidadfinal = cantidad - descuentototal;

    return cantidadfinal;
}