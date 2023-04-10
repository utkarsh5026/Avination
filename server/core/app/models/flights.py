from app.base_model import BaseModel
from django.db import models
from rest_framework import serializers
from app.models.airport import Airport
from app.models.airline import Airline
import datetime


class Flight(BaseModel):
    from_airport = models.ForeignKey(Airport, on_delete=models.CASCADE)
    to_airport = models.ForeignKey(Airport, on_delete=models.CASCADE)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    airline = models.ForeignKey(Airline, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Flights"

    @staticmethod
    def fetch_flights(
        from_airport: str, to_airport: str, date: datetime.date, sort_by: str = "price"
    ):
        return Flight.objects.filter(
            from_airport__code=from_airport,
            to_airport__code=to_airport,
            departure_time__date=date,
        ).order_by(sort_by)


class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = "__all__"
