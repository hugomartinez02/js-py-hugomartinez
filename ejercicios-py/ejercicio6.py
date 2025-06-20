import random

def factorial(n):
    resultado = 1
    for i in range(1, n + 1):
        resultado *= i
    return resultado

# Generar un número aleatorio entre 1 y 10
numero = random.randint(1, 10)
resultado = factorial(numero)

print(f"El factorial de {numero} es {resultado}")