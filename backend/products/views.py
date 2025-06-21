from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category']
    search_fields = ['name', 'description']
    
    def get_queryset(self):
        queryset = super().get_queryset()
        min_price = self.request.query_params.get('min_price')
        max_price = self.request.query_params.get('max_price')
        
        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
            
        return queryset

class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


from .models import PromotionalBanner
from .serializers import PromotionalBannerSerializer
from django.utils import timezone
class ActivePromotionalBanner(generics.ListAPIView):
    queryset = PromotionalBanner.objects.filter(is_active=True)
    serializer_class = PromotionalBannerSerializer
    
    def get_queryset(self):
        now = timezone.now()
        return super().get_queryset().filter(
            start_time__lte=now,
            end_time__gte=now
        )
    
from .models import GalleryImage
from .serializers import GalleryImageSerializer

class GalleryImages(generics.ListAPIView):
    queryset = GalleryImage.objects.filter(is_active=True)
    serializer_class = GalleryImageSerializer