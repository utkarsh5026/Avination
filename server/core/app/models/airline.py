from app.base_model import BaseModel
from django.db import models
from rest_framework import serializers


class Airline(BaseModel):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=3)
    logo = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class AirlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airline
        fields = "__all__"
