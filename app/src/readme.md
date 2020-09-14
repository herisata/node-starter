# Folder structure

/ config

> Holds config variables, may be from .env files, or other sources (plain text json, computed, dynamic from url)! But they sould be centralized and exported as a single config file

/ constants

> Holds constants values
>
> > | - types.ts Centralize string constants for the IoC (inversify)

/ controllers

> In there are the Controller files, defining the entrypoint of the API (more details on how they work and how to define them in the readme)

/ entities

> An entity class (may also be called a model) is a class which represents a table in the DB, each entity instance represents a line in that table. They are mapped by `typeorm` using the decorators on the class.

/ loaders

> When the server is starting, it loads a lot of things, like the connection to the db using typorm, the defining of all express routes and middlewares, the mapping of IoC string constants to their implementation,... Put all things loaded at start phase here.

/ migrations

> Holds migration files for `typeorm`, more infos on nested readme

/ repositories

> Hold repository files (obviously)

/ services

> Again, hold services

/ subscribers

> Another `typeorm` feature: cf [la doc](https://github.com/typeorm/typeorm/blob/master/docs/listeners-and-subscribers.md)

/types

> Type declaration files (d.ts) for Typescript
