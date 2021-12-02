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
        print('decypt: Test 1', request.data['password'])
        test_var = request.data['password']
        str(test_var)
        answer = decryption(test_var)
        print('decrypt: Test 2', answer)
        inputs = Input.objects.all()
        serialized_inputs = PopulatedSerializer(inputs, many=True)
        if serialized_inputs.is_valid():
            serialized_inputs.save(password=answer)
            return Response(serialized_inputs.data, status=status.HTTP_200_OK)
        else:
            return Response(input.errors, status=status.HTTP_406_NOT_ACCEPTABLE)

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
