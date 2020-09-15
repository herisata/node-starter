import 'reflect-metadata'; // for typeorm & inversify

import config from 'config';
import loaders from 'loaders';
import { Logger } from 'utils/logger';

async function startServer() {
  try {
    const PORT = config.api.port;
    Logger.info('⚡️[server]: Starting server...');

    // load everything the app needs
    const server = await loaders.initServer();

    server.build().listen(PORT, (err) => {
      if (err) {
        Logger.error(err);
        return;
      }

      Logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    Logger.error(error);
  }
}

startServer();
