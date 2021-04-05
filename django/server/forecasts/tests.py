from django.test import TestCase
from .models import Forecasts


class BasicTest(TestCase):
    def setUp(self):
        Forecasts.objects.create(
            city="Reno", country="US", weather="Cloudy", temp=65)
        pass

    def test_forecast_saved_correctly(self):
        forecast = Forecasts.objects.get(pk=1)
        self.assertEqual(forecast.city, "Reno")
        self.assertEqual(forecast.country, "US")
        self.assertEqual(forecast.weather, "Cloudy")
        self.assertEqual(forecast.temp, 65)

    def test_city_max_length(self):
        forecast = Forecasts.objects.get(pk=1)
        max_length = forecast._meta.get_field("city").max_length
        self.assertEqual(max_length, 20)

    def test_get_forecast(self):
        response = self.client.get("/api/forecasts/1/")
        self.assertEqual(response.status_code, 200)
