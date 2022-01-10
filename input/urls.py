from django.urls import path
from .views import InputListView, InputDetailView

urlpatterns = [
    path('view/', InputListView.as_view()),
    path('<int:pk>/', InputDetailView.as_view()),
]
