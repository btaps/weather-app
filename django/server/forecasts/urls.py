from rest_framework import routers
from .api import ForecastsViewSet

router = routers.DefaultRouter()
router.register('api/forecasts', ForecastsViewSet, 'forecasts')

urlpatterns = router.urls