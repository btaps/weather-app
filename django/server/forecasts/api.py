from forecasts.models import Forecasts
from rest_framework import viewsets, permissions
from .serializers import ForecastsSerializer

class ForecastsViewSet(viewsets.ModelViewSet):
    queryset = Forecasts.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ForecastsSerializer