from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, UserDetailsSerializer, JobDetailsSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import UserDetails, JobDetails

# Create your views here.
class UserDetailsUpdate(generics.ListCreateAPIView):
    serializer_class = UserDetailsSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return UserDetails.objects.filter(userid=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(userid=self.request.user)
        else:
            print(serializer.errors)

class UserDetailsDelete(generics.DestroyAPIView):
    serializer_class = UserDetailsSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return UserDetails.objects.filter(userid=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

