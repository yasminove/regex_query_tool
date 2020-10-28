from django.db import models


class ModifyTool(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(text='ssss')

# Create your models here.
class Tool(models.Model):
    text = models.CharField(max_length=500, default="null")
    regex = models.CharField(max_length=100, default="null")
    result = models.CharField(max_length=100, default="null")
    objects = models.Manager() 
    modified_objects = ModifyTool()



