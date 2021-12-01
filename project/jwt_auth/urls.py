from django.urls import path
from .views import RegisterView, LoginView, UsersDetailView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UsersDetailView.as_view())
]
