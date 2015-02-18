class Persona(object):
	nombre = str()
	altura = str()
	peso = int()
	def __init__(self, nombre, altura, peso):
		super(Persona, self).__init__()
		self.nombre = nombre
		self.altura = altura
		self.peso = peso
	def __str__(self):
		return self.nombre

h = Persona(nombre='Harvey', altura='1.70', peso=78)