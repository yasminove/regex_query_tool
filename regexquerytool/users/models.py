from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100, unique=True)
    owner = models.ForeignKey(User, related_name="users", on_delete=models.CASCADE, null=True)
 