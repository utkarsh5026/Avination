from app.base_model import BaseModel
from django.db import models
from rest_framework import serializers
from app.models.cities import Cities


class Airport(BaseModel):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=3)
    city = models.ForeignKey(Cities, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Airports"

    @staticmethod
    def fetch_airports(query: str):
        # fetch airports where either the name or the code matches the query
        return Airport.objects.filter(name__icontains=query) | Airport.objects.filter(
            code__icontains=query
        )


class AirportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airport
        fields = "__all__"
