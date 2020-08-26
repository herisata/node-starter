// Express route controllers for all the endpoints of the app
/* 
    - DON'T put business logic inside controllers
    - DO handle business logic inside service layer
    - DON'T pass request/response object to service layers
    - DO handle all things related to HTTP transport inside controllers (response code, headers, ...)
*/
import { Router } from 'express';
import root from './routes/root';

// guaranteed to get dependencies from DI
export default () => {
  const app = Router();
  root(app);

  return app;
};
