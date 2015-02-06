from django.test import TestCase

# Create your tests here.

from .models import Artist
from tracks.models import Track
from albums.models import Album

class TestArtists(TestCase):

	def setUp(self):
		self.artist = Artist.objects.create(first_name='david', last_name='bowie')
		self.track = Track.objects.create(title='heroes', artist=self.artist, album=self.album, order=0, track_file='/sa')
		self.album = Album.objects.create(title='heroes', artist=self.artist)

	def test_existe_vista(self):
		res = self.client.get('/artists/%d/' % self.artist.id)
		self.assertEqual(res.status_code, 200)
		self.assertTrue('david' in res.content)
	
	def test_usuario_logeado(self):
		res = self.client.get('/tracks/%s/' % self.track.title)
		self.assertEqual(res.status_code, 302)
		self.assertTrue('david' in res.content)

	def test_existe_vista(self):
		id_viejo = self.artist.id
		self.artist.delete()
		res = self.client.get('/artists/%d/' % id_viejo)
		self.assertEqual(res.status_code, 404)