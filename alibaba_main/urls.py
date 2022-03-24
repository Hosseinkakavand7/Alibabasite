from django.contrib import admin
from django.urls import path
from alibaba_main import views
urlpatterns = [
    path("",views.main_index),
    path("login",views.login),
    path("signup",views.signup),
]