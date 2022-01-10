from django.urls import path
from .views import RegisterView, LoginView, UsersListView, UserDetailView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UsersListView.as_view()),
    path('<int:pk>/', UserDetailView.as_view()),
]
