FROM python:3.9.5-slim
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt /app/
RUN pip3 install -r requirements.txt
COPY . /app/
ENTRYPOINT [ "./docker-entrypoint.sh" ]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]