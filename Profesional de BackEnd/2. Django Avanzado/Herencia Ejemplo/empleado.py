class Empleado(Persona):
	tipo = None
	empresa = 'Mejorando.la'
	def __init__(self, nombre, altura, peso, tipo):
		super(Empleado, self).__init__(nombre, altura, peso)
		self.tipo = tipo
	def __str__(self):
		return '{0.nombre} - {0.empresa}'.format(self)

hm = Empleado('HarveyD', '1.70', 78, 'Backend')