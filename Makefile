
up:
		docker-compose up

start app:
		docker-compose stop
		docker-compose start

migrations: 
		npm run typeorm migration:run

down:
		docker-compose down
