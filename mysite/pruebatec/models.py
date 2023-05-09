from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    logintime = models.FloatField(default=0)
    button1 = models.PositiveIntegerField(default=0)
    button2 = models.PositiveIntegerField(default=0)


