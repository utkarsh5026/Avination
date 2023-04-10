from app.base_model import BaseModel
from django.db import models
from rest_framework import serializers
from app.models.airline import Airline


class Plane(BaseModel):
    name = models.CharField(max_length=100)
    airline = models.ForeignKey(Airline, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Planes"


class PlaneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plane
        fields = "__all__"
