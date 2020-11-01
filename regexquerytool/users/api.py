from users.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ] 

    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user.users.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
