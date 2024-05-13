from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserDetails(models.Model):
    fullname = models.CharField(max_length=60)
    client_skills = models.TextField()
    client_qualifications = models.TextField()
    client_preferences = models.TextField()
    userid = models.ForeignKey(User, on_delete=models.CASCADE, related_name="userdetails")
    
    def __str__(self):
        return self.fullname
    
class JobDetails(models.Model):
    job_title = models.CharField(max_length=50)
    job_salary = models.CharField(max_length=8)
    job_description = models.TextField()
    company_name = models.CharField(max_length=50)
    date_posted = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.job_title