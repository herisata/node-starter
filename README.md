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

`sudo docker-compose -f docker-compose.dev.yml build`  
 `sudo docker-compose -f docker-compose.dev.yml up -d`

# Services

app (node, express) at `localhost:4000`  
mariadb at `mariadb:3306`  
phpmyadmin at `localhost:4080`

# Credentials

see .env.dev
