# node-starter

Node.js 12  
Express  
Typescript  
ESLint  
Prettier  
Docker  
Docker Compose  
MariaDB  
PhpMyAdmin  
[`classicmodels` sample database](https://www.mysqltutorial.org/mysql-sample-database.aspx/)

# To run:

## I. If you only need to connect to the online database

- `cp app/.env.example app/.env`
- then edit TYPEORM\_\* variables in `app/.env` to match the database you wish to connect to

### 1. no docker needed?

- `cd app`
- `npm install`
- `npm run start:dev`

### 2. want to lunch using docker?

(useful if we need to add some services later)

- `sudo docker-compose -f docker-compose.dev.yml build`
- `sudo docker-compose -f docker-compose.dev.yml up -d`

## II. If you want to use a dockerized database

(useful if you want to play with datas without hindering other devs/testers)

- `cp mariadb/.env.example mariadb/.env`
- edit `mariadb/.env` as you like
- you may want to replace `mariadb/init.sql` with your own database script
- `sudo docker-compose -f docker-compose.local.yml build`
- `sudo docker-compose -f docker-compose.local.yml up -d`

# Services

app (node, express) at `localhost:4000`  
mariadb at `mariadb:3306` (optionnal)  
phpmyadmin at `localhost:4080` (optionnal)
