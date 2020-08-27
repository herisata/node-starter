# Controllers

## Express route controllers for all the endpoints of the app

- contains the entrypoint of all API calls
- uses `inversify` to declare `paths`, `methods` and the injection of dependencies

## DON'T:

- put business logic inside controllers
- pass request/response object to the service layer

## DO:

- delegate business logic to the service layer
- handle HTTP request mapping and response codes here
