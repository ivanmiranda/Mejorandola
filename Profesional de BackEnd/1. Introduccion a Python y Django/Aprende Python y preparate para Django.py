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
lista3 = [1,2,3,7,8,9,1,5,4,3,1]

print set(lista1) - set(lista2)
print set(lista2) - set(lista1)
print set(lista2) & set(lista1)
print set(lista2) | set(lista1)
print set(lista3)

print lista3
lista3 = list(set(lista3))
print lista3

print string
print string[0:6]
print string[:6]
print string[3:]

print lista
print lista[:4]
print lista[-4:]
print lista[::2]
print string[::3]
print lista
print lista[0]
del lista[0]
print lista[0]
print diccionario
del diccionario['c']
print diccionario
hoy = 'Hoy es 2015/12/01'
import re
print hoy
print re.sub(r'(\d+)/(\d+)/(\d+)', r'\3-\2-\1', hoy)
cadena = '{}: The Dark {}'
print cadena
print cadena.format('Carlos', 'Cow')
cadena = '{name}: The Dark {thing}'
print cadena
print cadena.format(name='Carlos', thing='Cow')
print cadena.format(thing='Cow', name='Carlos')
data = {'name': 'Carlos', 'thing': 'Cow'}
print cadena.format(**data)
print '%s: The Dark %s' % ('Carlos', 'Cow')

def func():
    return 'Funcion'

print func()

def func(name, thing):
    return '{name}: The Dark {thing}'.format(name=name, thing=thing)

print func('Carlos', 'Cow')

def func(*args, **kwargs):
    print 'args', args
    print 'kwargs', kwargs

print func('Carlos', 'Cow')
print func(name='Carlos', thing='Cow')

def func(*args, **kwargs):
    print 'args', args
    print 'kwargs', kwargs
    if args:
        return '{}: The Dark {}'.format(*args)
    elif kwargs:
        return '{name}: The Dark {thing}'.format(**kwargs)
    else:
        return 'Nothing'

print func()
print func('Carlos', 'Cow')
print func(name='Carlos', thing='Cow')

class Curso():
    nombre = 'BackEnd'
    profesor = 'Harvey'

c = Curso()
print c.nombre
print c.profesor

d = Curso()
print d.nombre
print d.profesor

class Curso():
    def __init__(self, nombre, profesor):
        self.nombre = nombre
        self.profesor = profesor

c = Curso('FrontEnd', 'Leonidas')
print c
print c.nombre
print c.profesor

f = Curso('Backend', 'Harvey')
print f
print f.nombre
print f.profesor

class Curso():
    def __init__(self, nombre, profesor):
        self.nombre = nombre
        self.profesor = profesor

    def info(self):
        return 'Esta es la clase 1 de {nombre} dictada por {profesor}'.format(nombre=self.nombre, profesor=self.profesor)

f = Curso('FrontEnd', 'Leonidas')
print f.info()