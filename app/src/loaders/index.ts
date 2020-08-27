// Split the startup process into modules
import { InversifyExpressServer } from 'inversify-express-utils';

import expressLoader from './express';
import databaseLoader from './database';
import container from './inversify';
import Logger from './logger';

export default {
  initServer: async (): Promise<InversifyExpressServer> => {
    await databaseLoader();
    Logger.info('✌️ Database loaded');

    // ... more loaders can be put here

    // ... Initialize database
    // ... or Redis, or whatever you want

    const server = expressLoader({ container });
    Logger.info('✌️ Express loaded');

    return server;
  },
};
