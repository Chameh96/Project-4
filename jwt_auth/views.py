from django.contrib.auth.hashers import reset_hashers
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework import status

from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
from .serializers import TestSerializer, UserSerializer, PopulatedUserSerializer
from .models import User
User = get_user_model()

# Create your views here.


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        print('REQUEST.DATA :', request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Succesfully registered your account'})
        return Response(serializer.errors, status=422)


class LoginView(APIView):
    def get_user(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = self.get_user(email)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})
        token = jwt.encode(
            {'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user.username}'})


class UsersListView(APIView):
    def get(self, request):
        print("USER - 1: ", request.data)
        users = User.objects.all()
        serialized_users = TestSerializer(users, many=True)
        return Response(serialized_users.data, status=status.HTTP_200_OK)


class UserDetailView(APIView):
    def get(self, request, pk):
        print("USER - 1: ", request)
        sing_use = User.objects.get(id=pk)
        print("USER - 2: ", sing_use)
        serialized_users = TestSerializer(sing_use)
        print("USER - 3: ", serialized_users.data)
        return Response(serialized_users.data, status=status.HTTP_200_OK)
