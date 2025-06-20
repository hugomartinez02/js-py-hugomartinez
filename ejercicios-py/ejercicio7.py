def invertir_palabra(palabra):
    return palabra[::-1]

# Definir una lista de palabras
palabras = ["hola", "mundo", "python", "programación"]

# Invertir cada palabra y devolver al revés
inversas = [invertir_palabra(p) for p in palabras]
print(inversas)