from rest_framework import serializers
from forecasts.models import Forecasts
 
class ForecastsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forecasts
        fields = '__all__'