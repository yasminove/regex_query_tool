from regextool.models import Tool
# from regextool.models import ModifyTool
from rest_framework import viewsets, permissions
from .serializers import ToolSerializer
from .re import evalRegex
from django.http import HttpRequest


class ToolViewSet(viewsets.ModelViewSet):
    queryset = Tool.objects.all()
    # newTool = ModifyTool.objects.all()
    # for key in newTool:
    #     print(key)
    # print(queryset[0].valid, 'queryset')
    # print(queryset[0].result, 'queryset')
    # newTool = Tool.modified_objects.all()
    # for key in newTool:
    #     print(key, 'jjjjjjj')
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ToolSerializer
   

#     for key in queryset:
#         # print(key, 'key')
#         # print(queryset[0], '0')
#         # print(key.text)
#         newVal = evalRegex(key.regex, key.text)
#         # print(newVal)
#         # key.result = newVal
#         # print(key.result, 'kkkkkkkeyyyyyyy')
#         # key.text =  newVal  
        
#     # for key in queryset:
#     #     print(key.text, 'second kkkkkk')

#     # print(queryset[0].text, 'querysesssssssssssssssst')     

#     # for key in queryset:
#         # print(key.text, 'heyyyyyyy')  

#         # print(queryset.text , 'text')
#     # queryset.text =  newVal  
#     # print(queryset.text , 'sssiii')
#     # print(queryset[0].text, 'texttttttttttttt88888')
    
  

queryset = Tool.objects.all()
# # print(queryset, '00000queryset00000000')

class ViewSet(viewsets.ModelViewSet):
    queryset = Tool.objects.all()
    def myview(self, request):
        request = HttpRequest()
        # print(request.get_full_path(), 'metammmmmmmmmmmmmmm')
        # print(request.META['QUERY_STRING'], 'query')
        # print(request.GET.get('regex', 'regex'), 'query')
        # query = request.GET.get('regex', 'regex')
        # print(query., 'query2222')
        # print(request.GET.urlencode(), 'ya rabbb')
        # body_unicode = request.body.decode('utf-8')
        # body = json.loads(body_unicode)
        # content = body['content']
        # print(content, 'body')
        for key in queryset:
            # print(queryset[len(queryset) - 1] , 'queryset len')
            last_entry = queryset[len(queryset) - 1] 
            # print(last_entry.regex, last_entry.text, 'heeeerrrrrre')
            return HttpResponse(evalRegex(key.regex, key.text))

            

