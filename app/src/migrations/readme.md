# migrations

`typeorm` [migrations documentation](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md#migrations)

## To show all migrations and whether they've been run or not use following command:

`npm run typeorm migration:show`

## To create a migration

`npm run typeorm migration:create -- -n AbcMigration`

## To generate a migration

> The rule of thumb is to generate a migration after each entity change.

`npm run typeorm migration:generate -- -n UserMigration`

## To run all pending migrations

`npm run typeorm migration:run`

## To revert the most recent migration

`npm run typeorm migration:revert`

## To run any sql query

`npm run typeorm query "SELECT * FROM USERS"`
