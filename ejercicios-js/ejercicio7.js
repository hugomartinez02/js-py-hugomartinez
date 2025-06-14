// Lista de palabras
const palabras = ["hola", "mundo", "javascript", "programación", "código"];

// Selecciona una palabra al azar
const palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];

// Invierte la palabra
const palabraInvertida = palabraSeleccionada.split("").reverse().join("");

// Muestra el resultado
console.log(`Palabra seleccionada: ${palabraSeleccionada}`);
console.log(`Palabra invertida: ${palabraInvertida}`);