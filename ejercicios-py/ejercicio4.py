import random

def es_primo(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

# Generar número aleatorio
numero = random.randint(1, 100)
print(f"Número generado: {numero}")

# Verificar si es primo
if es_primo(numero):
    print("Es un número primo.")
else:
    print("No es un número primo.")