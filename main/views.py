from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')


def registro(request):
    return render(request, 'registro.html')

def Herramientas(request):
    return render(request, 'Herramientas.html')

def marcas(request):
    return render(request, 'maracas.html')

def RepuestosaPedido(request):
    return render(request, 'RepuestoaPedido.html')

def RepuestosenStock(request):
    return render(request, 'RepuestosenStock.html')

def Accesorios(request):
    return render(request, 'Accesorios.html')

def identificatumarca(request):
    return render(request, 'identificatumarca.html')

def contacto(request):
    return render(request, 'contacto.html')
