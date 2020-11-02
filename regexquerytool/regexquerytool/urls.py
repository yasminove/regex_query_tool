
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('regexquerytool.frontend.urls')),
    path('', include('regexquerytool.accounts.urls')),
    path('', include('regexquerytool.regextool.urls')),
    path('', include('regexquerytool.users.urls')),
   
]
