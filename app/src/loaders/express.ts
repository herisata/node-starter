import bodyParser from 'body-parser';
import { interfaces } from 'inversify';
import cors from 'cors';
import { InversifyExpressServer } from 'inversify-express-utils';

import { Logger } from 'utils/logger';

export default async ({ container }: { container: interfaces.Container }): Promise<InversifyExpressServer> => {
  const server = new InversifyExpressServer(container);

  server.setConfig((app) => {
    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.enable('trust proxy');

    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());

    // Middleware that transforms the raw string of req.body into json
    app.use(bodyParser.json());

    app.use((req, _res, done) => {
      Logger.info(`[express] Endpoint requested: ${req.originalUrl}`);
      done();
    });

    // ...More middlewares
  });
  server.setErrorConfig((app) => {
    /// catch 404 and forward to error handler
    app.use((_req, _res, next) => {
      const err = new Error('Not Found');
      next({
        ...err,
        status: 404,
      });
    });

    /// error handlers
    app.use((err, _req, res, next) => {
      /**
       * Handle 401 thrown by express-jwt library
       */
      if (err.name === 'UnauthorizedError') {
        return res.status(err.status).send({ message: err.message }).end();
      }
      return next(err);
    });

    app.use((err, _req, res, _next) => {
      res.status(err.status || 500);
      res.json({
        errors: {
          message: err.message,
        },
      });
    });
    app.use((err, _req, res, _next) => {
      Logger.error(err.stack);
      res.status(500).send('Something broke!');
    });
  });

  // Return the express app
  return server;
};
