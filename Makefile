init:
	docker network create --subnet=15.0.0.0/16 --gateway=15.0.0.1 kuna-network
db:
	docker-compose up -d
down:
	docker-compose down
