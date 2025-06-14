console.log("ejercicio 4:validar si un número es primo")
function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Generar un número aleatorio entre 1 y 100
const numero = Math.floor(Math.random() * 100) + 1;
const resultado = esPrimo(numero) ? "es primo" : "no es primo";

console.log(`El número generado es ${numero} y ${resultado}.`);