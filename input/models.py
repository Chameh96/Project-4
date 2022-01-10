from django.db import models
from django.http.response import HttpResponse
from cryptography.fernet import Fernet
from django_cryptography.fields import encrypt
from .encryption import decryption

# Create your models here.


class Input(models.Model):
    username = models.CharField(max_length=100)
    sitename = models.CharField(max_length=100)
    websiteurl = models.CharField(max_length=100)
    password = models.BinaryField(max_length=400)
    user = models.ForeignKey("jwt_auth.User", on_delete=models.CASCADE)

    def __str__(self):
        return "Username: " + self.username + ' Site_Name: ' + self.sitename + ' Website_url: ' + self.websiteurl

    def decryption_method(self):
        txt = self.password
        print('TXT', txt)
        dec_pass = decryption(txt)
        print('MAYBE DEC', dec_pass)
        return dec_pass
