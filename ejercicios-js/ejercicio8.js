function sumArray(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
const suma = sumArray(numeros);
console.log(`La suma del array es: ${suma}`);