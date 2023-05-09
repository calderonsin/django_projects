from .models import User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    def create(self, validated_data):
        password = validated_data.pop('password')
        try:            
            validate_password(password)
            validated_data['password'] = make_password(password)
                        
        except ValidationError as err:
            raise serializers.ValidationError({'password':err.messages})
        user = User.objects.create(username = validated_data['username'],password= validated_data['password'])     
        return user

    