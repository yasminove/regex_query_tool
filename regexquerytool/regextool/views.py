from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpRequest
from .re import evalRegex
from regextool.models import Tool



# Create your views here.

queryset = Tool.objects.all()
# print(queryset, '00000queryset00000000')


def myview(request):
    request = HttpRequest()
    print(request.get_full_path(), 'metammmmmmmmmmmmmmm')
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
        very_last1 = Tool.objects.last()
        print(very_last1.text, 'very_last1')
        # print(queryset[len(queryset) - 1] , 'queryset len')
        last_entry = queryset[len(queryset) -1 ]
        # print(last_entry.text, 'mmmm')
        if last_entry !=  queryset[len(queryset) -1 ]:
            very_last = queryset[len(queryset) -1 ]
            # print(very_last, 'very last')
        # print(last_entry.regex, last_entry.text, 'heeeerrrrrreddddd')
        
    # print(last_entry.regex, last_entry.text, 'heeeerrrrrrrr')   
    return HttpResponse(evalRegex(very_last1.regex, very_last1.text))

         

def process_view_test(request):
    return HttpResponse("Hello yasmin")    


    

