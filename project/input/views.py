from django.shortcuts import render
from django.http.response import HttpResponse
from cryptography.fernet import Fernet
from django_cryptography.fields import encrypt
from .encryption import encryption, decryption


from .models import Input
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PopulatedSerializer, InputSerializer


# Create your views here


class InputListView(APIView):
    def get(self, request):
        print('REQUEST', request.user)
        u = request.user
        print('USER :', u.input_set.all())
        query = u.input_set.all()
        just_pass = query.values('password')
        data = list(just_pass)
        print('DATA_LIST: ', data)
        for object in data:
            txt = object['password']
            print('TXT', txt)
            dec_pass = decryption(txt)
            print('MAYBE DEC', dec_pass)

        inputs = Input.objects.filter(user=u)
        serialized_inputs = InputSerializer(inputs, many=True)
        return Response(serialized_inputs.data, status=status.HTTP_200_OK)

    def post(self, request):
        test_var = request.data['password']
        str(test_var)
        answer = encryption(test_var)
        input = InputSerializer(data=request.data)
        if input.is_valid():
            input.save(password=answer)
            return Response(input.data, status=status.HTTP_201_CREATED)
        else:
            return Response(input.errors, status=status.HTTP_406_NOT_ACCEPTABLE)


class InputDetailView(APIView):
    # GET SINGLE INPUT
    def get(self, request, pk):
        input = Input.objects.get(id=pk)
        serialized_input = PopulatedSerializer(input)
        return Response(serialized_input.data, status=status.HTTP_200_OK)

    # DELETE INPUT
    def delete(self, request, pk):
        input = Input.objects.get(id=pk)
        input.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    # UPDATE INPUT
    def put(self, request, pk):
        test_var = request.data['password']
        str(test_var)
        answer = encryption(test_var)
        input = Input.objects.get(id=pk)
        updated_input = InputSerializer(input, data=request.data)
        if updated_input.is_valid():
            updated_input.save()
            return Response(updated_input.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_input.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
