from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from app.models.airport import Airport, AirportSerializer


class AirportView(APIView):
    def get(self, request: Request) -> Response:
        params = request.query_params
        query = params["query"]
        airports = Airport.fetch_airports(query)
        airports = AirportSerializer(airports, many=True)
        return Response(airports.data, status=status.HTTP_200_OK)
