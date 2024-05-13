from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserDetails, JobDetails

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}
        
    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user

class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ["id", "fullname", "client_skills", "client_qualifications", "client_preferences", "userid"]
        extra_kwargs = {"userid": {"read_only": True}}

class JobDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobDetails
        fields = ["id", "job_title", "job_salary", "job_qualifications", "job_preferences", "comapny_name", "date_posted"]
        
    