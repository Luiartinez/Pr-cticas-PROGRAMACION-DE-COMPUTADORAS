console.log("Menu opciones");
console.log("1.Programa que realiza el calculo del salario");
console.log("2.Programa que realiza la busqueda de un libro\n");


let opcion =1;



switch (opcion) {
    case 1:

        console.log("Programa que realiza el calculo del salario final");

        let Ingresos=[ {Salario:450},{HorasExtras:25},{Isss:13.50},{Afp:29}];

        let SalarioPago = (Ingresos[0].Salario+Ingresos[1].HorasExtras)-(Ingresos[2].Isss+Ingresos[3].Afp);

        console.log("Total a pagar es : " +SalarioPago);

        
        break;

    case 2:

        console.log("Programa que selecciona el libro buscado\n");

        let Biblioteca =[{libro:"Risitos de Oro", genero:"Cuentos"},
        {libro:"Harry Potter y la piedra filosofal",genero:"Magico"},
        {libro:"Comer, amar, rezar", genero: "Romance"},
        {libro:"Cura Mortal",genero:"Ficcion"}];

        console.log("Busqueda de libro por genero\n");

        let generoBuscado ="Ficcion";
        
    break;

    default:
        console.log("Ingrese una opcion correcta ");
        break;
}
