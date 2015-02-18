from django.shortcuts import render
from django.contrib.auth import login
from django.views.generic import View
from django.http import HttpResponse

from .forms import UserCreationEmailForm, EmailAuthenticationForm
# Create your views here.
def signup(request):
	form = UserCreationEmailForm(request.POST or None)

	if form.is_valid():
		form.save()
		#Logear inmediatamente despues de guardar el usuario

	return render(request, 'signup.html', {'form': form})

def signin(request):
	form = EmailAuthenticationForm(request.POST or None)

	if form.is_valid():
		login(request, form.get_user())

	return render(request, 'signin.html', {'form': form})

class LoginView(View):
	
	def get(self, request, *args, **kwargs):
		return HttpResponse('LoginView!!')