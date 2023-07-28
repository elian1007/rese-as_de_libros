
from django.contrib import admin
from django.urls import path
from django.urls import path,include
from . import views
# importar imagenes
from django.conf import settings
from libros.api.router import router_media

from django.conf.urls.static import static 

urlpatterns = [
    path('libros',views.libros ,name="libros"),
    path('api/',include(router_media.urls)),

]
