from django.urls import path
from .views import InputListView

urlpatterns = [
    path('password/', InputListView.as_view()),
]
