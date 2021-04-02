from django.db import models

class Forecasts(models.Model):
    city = models.CharField(max_length=20)
    country = models.CharField(max_length=20)
    weather = models.CharField(max_length=20)
    temp = models.IntegerField()