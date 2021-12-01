from django.shortcuts import render
from django.http.response import HttpResponse


from .models import Input
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PopulatedSerializer


# Create your views here.
class InputListView(APIView):
    def get(self, request):
        inputs = Input.objects.all()
        serialized_inputs = PopulatedSerializer(inputs, many=True)
        return Response(serialized_inputs.data, status=status.HTTP_200_OK)
