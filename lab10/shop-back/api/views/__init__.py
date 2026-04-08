# Lab 10 - Переключение между уровнями DRF Views
# Раскомментируй только один уровень за раз

# Level 5: Generics (самый рекомендуемый для сдачи)
from .generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView
)

# Level 4: Mixins
# from .mixins import (
#     ProductListAPIView,
#     ProductDetailAPIView,
#     CategoryListAPIView,
#     CategoryDetailAPIView,
#     CategoryProductsAPIView
# )

# Level 3: Class-Based Views (CBV)
# from .cbv import (
#     ProductListAPIView,
#     ProductDetailAPIView,
#     CategoryListAPIView,
#     CategoryDetailAPIView,
#     CategoryProductsAPIView
# )

# Level 2: Function-Based Views (FBV)
# from .fbv import (
#     products_list as ProductListAPIView,
#     product_detail as ProductDetailAPIView,
#     category_list as CategoryListAPIView,
#     category_detail as CategoryDetailAPIView,
#     category_products as CategoryProductsAPIView
# )