# Makefile for Treasure Hunt Quest
.PHONY: all run start test build clean docker-build docker-run

all: build test

run:
	python main.py

start:
	python server.py

test:
	python tests/test_runner.py

build:
	python scripts/count_loc.py

clean:
	python -c "import shutil, os; [shutil.rmtree(d, ignore_errors=True) for d in ('__pycache__', 'tests/__pycache__')]"

docker-build:
	docker build -t treasure-hunt-quest:latest .

docker-run:
	docker run -p 8080:8080 treasure-hunt-quest:latest
