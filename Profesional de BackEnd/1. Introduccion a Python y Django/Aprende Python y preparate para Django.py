#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      juan.flores
#
# Created:     07/01/2015
# Copyright:   (c) juan.flores 2015
# Licence:     <your licence>
#-------------------------------------------------------------------------------

# Regresando en el minuto 32

L=[22, True, "una lista",[1,2]]

lista = [1,7,4,9,-10,-7,5,0]

sorted(lista, reverse=True)
sorted(lista)

string="Esto es una cadena"
type(string)

diccionario = {'a' : 1, 'b' : 2, 'c' : 3, 'd' : 4}
diccionario2 = {'a' : 4, 'b' : 10, 'c' : 1, 'd' : -4}

sorted(diccionario2.items(), key=lambda x: x[1])

lista_dict = [{'item': 'cafe', 'valor':3},{'item':'azucar', 'valor':1},{'item':'pan', 'valor':5}]

sorted(lista_dict, key=lambda x: x['valor'])

print 'Contenido en string', string, ' y en lista', L

len(string)
len(L)

a, b, c = [1, 2, 3]

for l in L:
    print l

for d in diccionario:
    print d

for key, value in diccionario.items():
    print 'key:', key, 'value:', value

print diccionario.items()

def my_first_function():
    return "Hello World"

nombres = ['harvey', 'cursos', 'ventas']
emails = ['h@mejorando.la', 'cursos@mejorando.la', 'ventas@mejorando.la']

for n, e in zip(nombres, emails):
    print 'nombre', n, 'email', e

print zip(nombres, emails)

print dict(zip(nombres, emails))

print lista

positivos = list()

for l in lista:
    if l > 0:
        positivos.append(l)

print positivos

positivos2 = []

positivos2 = [l for l in lista if l > 0]

print positivos2

pares = [{k: v} for k, v in diccionario2.items() if v%2 == 0]

print diccionario2
print pares

lista1 = [1,2,3,4]
lista2 = [3,4,5,6]