from django.shortcuts import redirect, render
from django.views.generic import View
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages




# Create your views here.
# class VRegistro(View):
#     def get(self,request):
#         form=UserCreationForm()
#         return render(request, "authentication/registro.html",{"form":form})

#     def post(self,request):
#         form=UserCreationForm(request.POST)
#         if form.is_valid():

#             usuario=form.save()
#             login(request, usuario)
#             return redirect('inicio')
#         else:
#             for msg in form.error_messages:
#                 messages.error(request, form.error_messages[msg])
#             return render(request, "authentication/registro.html",{"form":form})

def cerrar_sesion(request):
    logout(request)
    return render(request,"authentication/login.html")

def login(request):
    if request.method=="POST":
        form=AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            nombre=form.cleaned_data.get("username")
            contraseña=form.cleaned_data.get("password")
            usuario=authenticate(username=nombre, password=contraseña)
            id= request.user
            if usuario is not None:
                # login(request)
                return render(request,"libros/libros.html",{"usuario.id":usuario.id})
            else:
                messages.error(request, "Usuario no valido")
        else:
            messages.error(request, "Usuario no valido")

    form=AuthenticationForm()
    return render(request,"authentication/login.html",{"form":form})
