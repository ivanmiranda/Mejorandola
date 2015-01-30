from django.contrib import admin

# Register your models here.
from .models import Track

class TrackAdmin(admin.ModelAdmin):
	list_display = ('title', 'artist', 'order', 'track_file', 'album')

admin.site.register(Track, TrackAdmin)