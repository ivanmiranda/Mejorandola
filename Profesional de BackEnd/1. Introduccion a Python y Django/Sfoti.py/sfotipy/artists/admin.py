from django.contrib import admin

# Register your models here.
from .models import Artist

from tracks.models import Track

class TrackInline(admin.StackedInline):
	model = Track
	extra = 1

from albums.models import Album

class AlbumInline(admin.StackedInline):
	model = Track
	extra = 1

class ArtistAdmin(admin.ModelAdmin):
	search_fields = ('first_name', 'last_name')
	#filter_horizontal = ('favorite_songs', )
	filter_vertical = ('favorite_songs', )
	inlines = [TrackInline, AlbumInline, ]

admin.site.register(Artist, ArtistAdmin)