console.log("Ejercicio 9: Encontrar el mayor y menor de una lista de números");

function encontrarMayorMenor(lista) {
    if (!lista || lista.length === 0) {
        return [null, null];
    }
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    return [mayor, menor];
}

const numeros = [10, 25, 3, 99, 7, 15];
const [mayor, menor] = encontrarMayorMenor(numeros);
console.log(`Mayor: ${mayor}, Menor: ${menor}`);