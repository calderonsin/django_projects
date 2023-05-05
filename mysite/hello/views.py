from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import get_object_or_404, render
from django.views import generic


# Create your views here.
def myview(request):

    num_visits = request.session.get('num_visits',0) + 1
    request.session['num_visits']= num_visits
    response = render(request,'hello/home.html',{'num_visits':num_visits})
    response.set_cookie('dj4e_cookie', '849c1698', max_age=1000)
    return response
