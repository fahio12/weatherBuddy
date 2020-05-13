from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def buddy(request):
    p1 = {
        'name':'Juan',
        'age':23
    }
    return render(request,"buddy.html",p1)
