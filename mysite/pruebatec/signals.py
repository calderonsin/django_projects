from django.contrib.auth.signals import user_logged_in,user_logged_out
from django.dispatch import receiver
from .models import User
from django.utils import timezone

@receiver(user_logged_out)
def user_login_handler(sender, request, user, **kwargs):
    last_login= user.last_login
    current_time = timezone.now()
    timedelta = current_time - last_login
    user.logintime = user.logintime + (timedelta.total_seconds()/60)
    user.save()
    

