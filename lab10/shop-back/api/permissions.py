from rest_framework import permissions

class IsInactiveOrReadOnly(permissions.BasePermission):


    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS or request.method in ['POST', 'PUT', 'PATCH']:
            return True

        if request.method == 'DELETE':
            return not obj.is_active

        return True