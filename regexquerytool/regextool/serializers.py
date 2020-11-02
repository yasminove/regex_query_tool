from rest_framework import serializers
from regexquerytool.regextool.models import Tool


class ToolSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Tool
        fields = '__all__'