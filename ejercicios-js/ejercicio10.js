console.log("ejercicio 10:generador de contrasena simple")

function generarContrasena(longitud) {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(randomIndex);
    }
    return contrasena;
}

console.log(generarContrasena(12));