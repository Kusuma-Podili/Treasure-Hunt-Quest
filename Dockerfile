# Production Dockerfile for Treasure Hunt Quest
FROM python:3.10-slim

WORKDIR /app

# Copy application files
COPY . /app

# Expose game server port
EXPOSE 8080 8000

# Health check endpoint
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/api/status')" || exit 1

# Default execution
CMD ["python", "main.py"]
