from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request
from dataclasses import dataclass
from datetime import date
from django.http import QueryDict
from app.models.flights import Flight, FlightSerializer


class FlightView(APIView):
    @dataclass
    class GetRequestParams:
        code: str
        from_airport: str
        to_airport: str
        date: date
        sort_by: str = "price"

    def get(self, request: Request) -> Response:
        params = request.query_params
        params = self.extract_params(params)
        flights = self.fecth_flights(params)
        return Response(flights, status=status.HTTP_200_OK)

    @staticmethod
    def extract_params(params: QueryDict) -> GetRequestParams:
        return Flight.GetRequestParams(
            code=params["code"],
            from_airport=params["from_airport"],
            to_airport=params["to_airport"],
            date=date.fromisoformat(params["date"]),
            sort_by=params["sort_by"],
        )

    @staticmethod
    def fecth_flights(params: GetRequestParams) -> list[dict]:
        flights = Flight.fetch_flights(
            from_airport=params.from_airport,
            to_airport=params.to_airport,
            date=params.date,
            sort_by=params.sort_by,
        )

        flights = FlightSerializer(flights, many=True)
        return flights.data
