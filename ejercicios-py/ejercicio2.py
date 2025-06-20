import random

def verificar_par_impar():
    numero = random.randint(1, 100)
    if numero % 2 == 0:
        resultado = "par"
    else:
        resultado = "impar"
    return f"El número generado es {numero} y es {resultado}."

# Ejemplo de uso
print(verificar_par_impar())