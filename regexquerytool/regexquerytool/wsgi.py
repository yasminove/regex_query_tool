"""
WSGI config for regexquerytool project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os
import sys
from pathlib import Path
path = 'regexquerytool.settings'

from django.core.wsgi import get_wsgi_application    

if path not in sys.path:
    sys.path.append(path)


project_home = u'Desktop/regex_query_tool'


os.environ['DJANGO_SETTINGS_MODULE'] = 'regexquerytool.settings'    



os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'regexquerytool.settings.dev')

application = get_wsgi_application()
