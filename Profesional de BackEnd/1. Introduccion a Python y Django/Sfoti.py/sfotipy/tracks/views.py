import json
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404

from .models import Track
# Create your views here.
#@login_required
def track_view(request, title):

	""" Aqui se pregunta si el title que se manda en la url existe en Track, 
	de no existir, manda un error 404, ya que antes mandaba todos los datos
	sencibles con el error, recordar cambiar la variable DEBUG = True para 
	produccion. Esto en comentarios es lo mismo que el shortcut de abajo.
	try:
		track = Track.objects.get(title=title)
	except Track.DoesNotExist:
		raise Http404
	"""
	#Para debugear, revisar codigo
	#import ipdb; ipdb.set_track()	
	track = get_object_or_404(Track, title=title)
	bio = track.artist.biography

	#TAREA - SERIALIZAR todo lo de track, titulo, album y demas

	data = {
		'title': track.title,
		'order': track.order,
		'album': track.album.title,
		'artist': {
			'name': track.artist.first_name,
			'bio': bio,
		}
	}

	#json_data = json.dumps(data)

	#Para cambiar de JSON a datos que reconosca python
	#json.loads(string_json)

	#return HttpResponse(json_data, content_type='application/json')

	#return HttpResponse('Ok')
	return render(request, 'track.html', {'track': track, 'bio': bio})