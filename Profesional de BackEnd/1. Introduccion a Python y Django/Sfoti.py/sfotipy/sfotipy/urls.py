from django.conf.urls import patterns, include, url
<<<<<<< HEAD

from django.conf import settings

=======
from django.conf import settings
>>>>>>> origin/master
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'sfotipy.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
<<<<<<< HEAD
    (r'^grappelli/', include('grappelli.urls')), # grappelli URLS
=======

    (r'^grappelli/', include('grappelli.urls')), #grappelli URLS
>>>>>>> origin/master
    url(r'^admin/', include(admin.site.urls)),
    url(r'^tracks/(?P<title>[\w\-]+)/', 'tracks.views.track_view', name='track_view'),
    url(r'^signup/', 'userprofiles.views.signup', name='signup'),
    url(r'^signin/', 'userprofiles.views.signin', name='signin'),
)

urlpatterns += patterns('',
	url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT,}),
)