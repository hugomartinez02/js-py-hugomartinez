console.log("ejercicio 2:verificador de par/impar")
function verificarParidad() {
    // Generar un número aleatorio entre 0 y 99
    const num = Math.floor(Math.random() * 100);

    // mostrar el número generado
    console.log(`Número generado: ${num}`);

    // Verificar si es par o impar y mostrar el resultado
    console.log(num % 2 === 0 ? "✅ Es par" : "❌ Es impar");
}

// Llamar a la función para probarla
verificarParidad();