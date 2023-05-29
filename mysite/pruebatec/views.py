from django.shortcuts import render,redirect
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.views.generic.edit import FormView
from django.views.generic import TemplateView, ListView
from django.views import generic
from django.contrib.auth import logout,authenticate
from django.contrib.auth.decorators import login_required
from .models import User
from rest_framework.decorators import api_view, authentication_classes,action
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import viewsets,permissions,status,views
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.exceptions import PermissionDenied
from django.utils import timezone
from django.db.models import Case, When, F
from django.db.models.functions import Now
from django.db import models
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
# Create your views here.


class Button1View(APIView):
    authentication_classes = [TokenAuthentication]
    def patch(self, request):
        obj = User.objects.get(pk=request.data['id'])
        obj.button1 += 1
        obj.save()
        serializer = UserSerializer(obj)
        return Response(serializer.data)
    

class Button2View(APIView):
    authentication_classes = [TokenAuthentication]
    def patch(self, request):
        obj = User.objects.get(pk=request.data['id'])
        obj.button2 += 1
        obj.save()
        serializer = UserSerializer(obj)
        return Response(serializer.data)
    

class UserViewSet(viewsets.ModelViewSet):
    
    """
    API endpoint that allows users to be viewed or edited.
    """
    #queryset = User.objects.all().order_by('-date_joined')
    authentication_classes = [TokenAuthentication]
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    

    def get_queryset(self):
        if self.request.user.is_superuser:
            resultquery = User.objects.annotate(
                is_current_user=Case(
                When(pk=self.request.user.pk, then=1),
                default=0,
                output_field=models.IntegerField())
                ).order_by('-is_current_user', '-date_joined')
            return resultquery
        else:
            
            return  User.objects.filter(pk=self.request.user.pk)


    def handle_exception(self, exc):
        if isinstance(exc, PermissionDenied):
            return Response({'detail': 'You do not have permission to perform this action.'}, status=status.HTTP_403_FORBIDDEN)
        return super().handle_exception(exc)

    def get_permissions(self):
            if self.action == 'create':
                permission_classes = [permissions.IsAdminUser]
            else:
                permission_classes = [permissions.IsAuthenticated]
            return [permission() for permission in permission_classes]
    
    def create(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            PermissionDenied()
        return super().create(request, *args, **kwargs)    

    
    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        instance = self.get_object()
        instance.last_login = timezone.now()  # Update the lastlogin field
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

class LogoutView(views.APIView):
    authentication_classes = [TokenAuthentication]
    def patch(self, request, *args, **kwargs):
        obj = User.objects.get(pk=request.data['id'])        
        current_time = timezone.now()
        timedelta = current_time - obj.last_login
        obj.logintime = obj.logintime +(timedelta.total_seconds()/60)
        obj.save()
        serializer = UserSerializer(obj)
        return Response(serializer.data,status=status.HTTP_200_OK)
        # Delete the token associated with the user

class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request,*args, **kwargs)
        if response.status_code == 200:
            user = User.objects.filter(username=request.data['username']).first()
            #serializer = UserSerializer(user)
            data ={
                'username':user.username,
                'password':user.password,
                'last_login': timezone.now()
            }
            #user.last_login = timezone.now()  # Update the lastlogin field
            serializer = UserSerializer(user, data=data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return response
            # Retrieve the token from the response
            
            
            #token = Token.objects.get(user=request.data['username'])

            # Perform extra steps or modifications here

            # Add custom data to the response
            
        #user = authenticate(email= email,password=password)        
        
        #return response

#ya tengo el token en response, debo obtener el usuario con el token
#usando Token de authtoken.models
