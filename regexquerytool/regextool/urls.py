from rest_framework import routers
from .api import ToolViewSet
from .api import ViewSet
from . import views
from django.urls import path
from .re import evalRegex


router = routers.DefaultRouter()

router.register('api/test', ToolViewSet, evalRegex)

urlpatterns = router.urls


urlpatterns = urlpatterns.__add__([
    path('myview/', views.myview),
    path('process_view_test/', views.process_view_test)
])