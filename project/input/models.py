from django.db import models
from django.http.response import HttpResponse
from cryptography.fernet import Fernet
from django_cryptography.fields import encrypt

# Create your models here.


class Input(models.Model):
    username = models.CharField(max_length=100)
    site_name = models.CharField(max_length=100)
    website_url = models.CharField(max_length=100)
    password = models.CharField(max_length=400)
    user = models.ForeignKey("jwt_auth.User", on_delete=models.CASCADE)

    def __str__(self):
        return self.username + self.site_name + self.website_url + self.password
