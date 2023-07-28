
from django.contrib import admin
from django.urls import path,include
from django.contrib import admin
from django.urls import path
from django.urls import path,include
# importar imagenes
from django.conf import settings
from libros.api.router import router_media

urlpatterns = [
    path('admin/', admin.site.urls),
    path('libros',include('libros.urls')),
    path('',include('authentication.urls')),
    path('api/',include(router_media.urls)),

]
