from django.db import models

# Create your models here.
class UserProfile(models.Model):
	avatar = models.ImageField(upload_to = 'avatars')
	user = models.OneToOneField(User)

	def __str__(self):
		return self.user.username

class UserTrack(models.Model):
	count = models.PositiveIntegerField(default=0)
	user = models.ForeigKey(User)
	track = models.ForeigKey(Track)