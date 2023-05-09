from django.shortcuts import render,redirect
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.views.generic.edit import FormView
from django.views.generic import TemplateView, ListView
from django.views import generic
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from .models import User
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.authentication import BasicAuthentication
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import UserSerializer
# Create your views here.

class Defaultview(generic.TemplateView):
    template_name = 'pruebatec/button.html'
    def get(self, request, *args, **kwargs):
        user = request.user
        if user.is_superuser == True:
            return redirect('pruebatec:userListView')


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

@api_view(['GET'])
@authentication_classes([BasicAuthentication])
class UserListView(ListView):
    model = User
    template_name = 'pruebatec/superuser.html'
    def get_queryset(self):
        return User.objects.filter(is_superuser=False)

@authentication_classes([BasicAuthentication])
def update_user_field(request):
    user = request.user
    context = {'user': user}
    if request.method == 'POST':
        action = request.POST.get('action')
        if action == 'increase_1':
            user.button1 += 1
        elif action == 'increase_2':
            user.button2 += 1
        user.save()
        return redirect('pruebatec:update_user_field')

    return render(request, 'pruebatec/button.html',context)


@authentication_classes([BasicAuthentication])
def logout_view(request):
    logout(request)
    return redirect('login')