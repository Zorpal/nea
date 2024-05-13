from django.urls import path
from . import views
urlpatterns = [
    path("userdetails/", views.UserDetailsUpdate.as_view(), name="Client-Details"),
    path("userdetails/delete/<int:pk>/", views.UserDetailsDelete.as_view(), name="Delete-Client-Details"),
]