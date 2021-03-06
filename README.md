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

# Important

**Don't forget to connect to the VPN before running the app**, it's necessary in order to reach the database.

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

# TODOs:

- [x] Enforce ESLint/Prettier styling `airbnb-base` (without react deps)
- [x] Wire up `husky`
- [ ] Remove unneeded entities
- [x] Set up `express-validation` to handle request params validation
- [x] Better handling of the logger (should load in `loaders` but accessible from `utils`)
- [x] Put documentations on used design patterns : IoC, Data Mapper, Loader, 3-layers,...
- [x] Create a custom repository for example => [here](app/src/repositories/AdminUsersRepository.ts)
- [ ] How to deploy the app?
- [ ] Handle auth
- [ ] Handle rights ? Policies
- [x] Integrate jest
- [x] Document project structure
- [x] Document migrations
- [x] How to create an endpoint => [here](app/src/controllers/)
- [x] Document folder structure
- [ ] Set up pubsub internally
- [ ] Set up task scheduler
- [ ] Emulate view system (mapper?) Entity => View (a voir: presenter)
