import random

def contar_vocales(palabra):
    vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ'
    return [letra for letra in palabra if letra in vocales]

palabras = [
    "Aceituna", "Murciélago", "Educación", "Aeropuerto",
    "Otorrinolaringólogo", "Euforia", "Aceite", "Paleontólogo",
    "Hipopótamo", "Arquitectura"
]

palabra_seleccionada = random.choice(palabras)
vocales_encontradas = contar_vocales(palabra_seleccionada)

print(f"Palabra seleccionada: {palabra_seleccionada}")
print(f"Vocales encontradas: {', '.join(vocales_encontradas)}")
print(f"Total de vocales: {len(vocales_encontradas)}")