console.log("menu de opciones");
console.log("1 propiedades basicas de arrays");
console.log("2 metodos avandos de arrays");
console.log("3 combinaciones de arrays");

let opcion =3;

switch (opcion) {
    case 1:
        console.log("has ingresado a la opcion 1/n")

        let numero =[10,20,30,40,50,60];

        console.log("longitud del arreglo", numero.length, "/n");

        numero.push(70);
        console.log("arreglo despues de push" ,numero, "/n");

        let ultimoelemento = numero.pop();
        console.log("arreglo despues de pop ", numero, "/n");

        break;

        case 2: 

        console.log("has ingresado la opcion 2/n");

        let numeros = [,1,2,3,4,5];

        let multiplicacionarray = numeros.map(num => num* 3);
        console.log("multiplicacion * 3 del arreglo ", multiplicacionarray, "/n");

        let numerosfiltrados = numeros.filter(num => num > 2 );
        console.log("numeros mayores a 2 : ", numerosfiltrados , "/n");
        
        break;

        case 3:

        console.log("has ingresado a la opcion 3")

        let letras = ["c", "a", "b", "e", "d"];
        let numerosiniciales = [3, 1, 2, 5, 4];

        letras.sort();
        numerosiniciales.sort((a,b) => a - b);
        console.log("letras ordenadas:", letras);
        console.log("numeros ordenados:", numerosiniciales, "/n");

        let combinados = letras.concat(numerosiniciales);
        console.log("arrays combinados :" ,combinados,"/n");

        combinados.reverse();
        console.log("arrays combinado inverso : ",combinados);

        break;

        default:
            console.log("debe ingresar una opcion correcta 1 - 3");
            break;
}