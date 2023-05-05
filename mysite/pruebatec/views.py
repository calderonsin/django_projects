from django.shortcuts import render,redirect
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.views.generic.edit import FormView
from django.views.generic import TemplateView, ListView
from django.views import generic
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from .models import User
# Create your views here.

class Defaultview(generic.TemplateView):
    template_name = 'pruebatec/button.html'
    def get(self, request, *args, **kwargs):
        user = request.user
        if user.is_superuser == True:
            return redirect('pruebatec:userListView')


class UserListView(ListView):
    model = User
    template_name = 'pruebatec/superuser.html'
    def get_queryset(self):
        return User.objects.filter(is_superuser=False)

@login_required
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


@login_required
def logout_view(request):
    logout(request)
    return redirect('login')