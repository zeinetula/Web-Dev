from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category


def product_list(request):
    products = Product.objects.all()
    data = [{
        'id': p.id,
        'name': p.name,
        'price': float(p.price),
        'description': p.description or "",
        'count': p.count,
        'is_active': p.is_active,
        'category_id': p.category.id,
        'category_name': p.category.name,
        'image': p.image,                    # ← явно добавляем
    } for p in products]
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


def product_detail(request, id):
    product = get_object_or_404(Product, pk=id)
    data = {
        'id': product.id,
        'name': product.name,
        'price': float(product.price),
        'description': product.description or "",
        'count': product.count,
        'is_active': product.is_active,
        'category_id': product.category.id,
        'category_name': product.category.name,
        'image': product.image,
    }
    return JsonResponse(data, json_dumps_params={'ensure_ascii': False})


def category_list(request):
    categories = Category.objects.all()
    data = [{'id': c.id, 'name': c.name} for c in categories]
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    data = {'id': category.id, 'name': category.name}
    return JsonResponse(data, json_dumps_params={'ensure_ascii': False})


def category_products(request, id):
    category = get_object_or_404(Category, pk=id)
    products = category.products.all()
    data = [{
        'id': p.id,
        'name': p.name,
        'price': float(p.price),
        'description': p.description or "",
        'count': p.count,
        'is_active': p.is_active,
        'image': p.image,                    # ← явно добавляем
    } for p in products]
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})