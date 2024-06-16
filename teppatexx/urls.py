from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('dealers/', views.dealers, name='dealers'),
    path('contacts/', views.contacts, name='contacts'),
    path('models/', views.models, name='models'),
    path('models_old/', views.models_old, name='models_old'),
]
