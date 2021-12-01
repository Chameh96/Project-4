from rest_framework import serializers
from .models import Input
from jwt_auth.out_serializer import UserSingleSerlializer


class InputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Input
        fields = '__all__'


class PopulatedSerializer(InputSerializer):
    user = UserSingleSerlializer(read_only=True, many=True)
