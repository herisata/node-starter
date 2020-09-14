# List of loaders

`database`: uses typeorm to connect to the database  
`express`: uses express to set up the API entrypoint, the middlewares, errors handlers and all express stuffs  
`index`: orchestrate the loading order of each loaders and print some fancy messages :D  
`inversify`: uses inversify to initiate the IoC container, all controllers and dependency injection mapping  
`logger`: uses winston to setup the logging util
