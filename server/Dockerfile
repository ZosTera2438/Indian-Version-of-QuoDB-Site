
FROM ghcr.io/owl-corp/python-poetry-base:3.11-slim

WORKDIR /app

ADD poetry.lock pyproject.toml ./
RUN poetry install --no-root --no-cache

RUN poetry run pip show uvicorn || exit 1

COPY . .

RUN chmod +x ./wait-for-es.sh

EXPOSE 8000

ENV ELASTICSEARCH_URL=http://elasticsearch:9200

CMD ["./wait-for-es.sh", "http://elasticsearch:9200", "python", "main.py"]