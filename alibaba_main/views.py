from django.shortcuts import render

# Create your views here.

def main_index(request):
    return render(request,"base.html")
def login(request):
    return render(request,"login.html")
def signup(request):
    return render(request,"register.html")
