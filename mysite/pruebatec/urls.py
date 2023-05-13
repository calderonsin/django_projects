from django.urls import include,path
from . import views
from django.views.generic import TemplateView
from rest_framework import routers

app_name = 'pruebatec'

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet,'users')
urlpatterns = [
    path('api/v0/', include(router.urls)),
    path('api/v0/button1/', views.Button1View.as_view(), name='increment_button1'),
    path('api/v0/button2/', views.Button2View.as_view(), name='increment_button1'),
    path('api/v0/logout/', views.LogoutView.as_view(), name='logout'),
    #path('update', views.update_user_field,name='update_user_field'),
    #path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    #path('logout/', views.logout_view, name='logout'),
    #path('userlistview/', views.UserListView.as_view(), name='userListView'),
]

