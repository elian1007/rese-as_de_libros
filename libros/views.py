from django.shortcuts import render

# Create your views here.
def libros (request):
    return render(request,'libros/libros.html')