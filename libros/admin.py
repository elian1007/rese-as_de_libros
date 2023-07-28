from django.contrib import admin

from libros.models import Media,MediaViews , MediaRating

# Register your models here.
admin.site.register(Media)
class MediaAdmin(admin.ModelAdmin):
    list_display={'name','genre','author','summary'}
    
admin.site.register(MediaViews)
class MediaViewsAdmin(admin.ModelAdmin):
    list_display={'id','userId','mediaId'}

admin.site.register(MediaRating)
class MediaRatingAdmin(admin.ModelAdmin):
    list_display={'id','userId','mediaId','rate','review'}
# admin.site.register(InventariosItems)
# admin.site.register(Ciudades)
