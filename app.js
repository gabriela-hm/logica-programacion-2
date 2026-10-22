const prompt = require("prompt-sync")();
let celsius;
let datos;

datos = prompt("ingresa la temperatura en grados Clesius:");

while (datos === null || datos.trim() === "" || !Number.isFinite(Number(datos))){
    console.log("Error: debes ingresar el dato en número.");

    datos = prompt("Ingresa nuevamente la temperatura en grados Celsius:");

}

celsius = Number (datos);

let fahrenheit = (celsius * 1.8) + 32;
let kelvin = celsius + 273.15;


console.log("Grados Kelvin: " + kelvin);
console.log("Grados Fahrenheit: " + fahrenheit);