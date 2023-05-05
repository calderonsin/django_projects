from django.urls import path
from . import views
from django.views.generic import TemplateView
app_name = 'pruebatec'
urlpatterns = [
    path('', views.Defaultview.as_view(),name='pruebatec'),
    path('update', views.update_user_field,name='update_user_field'),
    path('logout/', views.logout_view, name='logout'),
    path('userlistview/', views.UserListView.as_view(), name='userListView'),
]

