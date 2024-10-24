let num1 = 0;
let num2 = 1;

let siguientenumero;

let limite = 10;

console.log("secuencia de fibonacci:");
console.log(num1);
console.log(num2);

let i = 2;
while (i < limite) {
    siguientenumero = num1 + num2;
    console.log(siguientenumero);

    num1 = num2;
    num2 = siguientenumero;

    i++;
}