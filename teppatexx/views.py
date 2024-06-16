from django.shortcuts import render

def main(request):
    return render(request, 'teppa/main.html')

def contacts(request):
    return render(request, 'teppa/contacts.html')

def dealers(request):
    return render(request, 'teppa/dealers.html')

def models(request):
    return render(request, 'teppa/models.html')

def models_old(request):
    return render(request, 'teppa/models_old.html')
