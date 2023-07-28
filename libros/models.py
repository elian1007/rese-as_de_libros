from django.db import models
from django.db import models
from django.db import models
from django.conf import settings
from django.db.models import IntegerField, Model
from django.core.validators import MaxValueValidator, MinValueValidator


class Media(models.Model):
        name=models.CharField(max_length=50,blank=True,null=True)
        genre=models.CharField(max_length=50, null=False)
        author=models.CharField(max_length=50, null=False)
        summary=models.CharField(max_length=1000)

class MediaViews(models.Model):
        id = models.AutoField(primary_key=True, blank=False, null=False)
        userId=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
        mediaId=models.ForeignKey(Media,on_delete=models.CASCADE)

class MediaRating(models.Model):
        userId=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
        mediaId=models.ForeignKey(Media,on_delete=models.CASCADE)
        review=models.CharField(max_length=500, null=True)
        rate = IntegerField(
        default=0,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ]
     )
# Create your models here.
