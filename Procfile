web: gunicorn regex_query_tool.regexquerytool.wsgi:application --log-file - --log-level debug
python manage.py collectstatic --noinput
manage.py migrate