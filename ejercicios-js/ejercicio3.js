console.log("ejercicio 3:contador de vocales")
// Lista de palabras
const palabras = [
    "Aceituna", "Murciélago", "Educación", "Aeropuerto", "Otorrinolaringólogo",
    "Euforia", "Aceite", "Paleontólogo", "Arquitectura", "Hipopótamo"
];

// Función para contar las vocales en una palabra
function contarVocales(palabra) {
    const vocales = "AEIOUÁÉÍÓÚaeiouáéíóú";
    return palabra.split("").filter(letra => vocales.includes(letra));
}

// Selección aleatoria de una palabra
const palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];

// Contar vocales
const vocalesEncontradas = contarVocales(palabraSeleccionada);

console.log(`Palabra seleccionada: ${palabraSeleccionada}`);
console.log(`Vocales encontradas: ${vocalesEncontradas.join(", ")}`);
console.log(`Cantidad de vocales: ${vocalesEncontradas.length}`);