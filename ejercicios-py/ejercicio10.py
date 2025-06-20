import random
import string

def generar_contraseña():
    longitud = random.randint(16, 40)
    caracteres = string.ascii_letters + string.digits
    contraseña = ''.join(random.choice(caracteres) for _ in range(longitud))
    return contraseña

# Ejemplo de uso
print("Contraseña generada:", generar_contraseña())