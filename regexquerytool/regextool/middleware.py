from django.utils.deprecation import MiddlewareMixin
from django.http import HttpRequest

class MyMd(MiddlewareMixin):

    def process_request(self, request):
        if "p" in request.GET.keys():
            print('hey from req')
            return HttpRequest.POST
        return None

    def process_view(self, request, view_function, view_args, view_kwargs):
        if view_function.__name__ == "process_view_test":
            return HttpResponse("This method only work for this view =)")
        return None