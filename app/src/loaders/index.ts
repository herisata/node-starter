// Split the startup process into modules
import { InversifyExpressServer } from 'inversify-express-utils';

import expressLoader from './express';
import databaseLoader from './database';
import inversifyLoader from './inversify';
import Logger from './logger';

export default {
  initServer: async (): Promise<InversifyExpressServer> => {
    Logger.info('↻ Database loading...');
    await databaseLoader();
    Logger.info('✌️ Database loaded');

    // ... more loaders can be put here

    // ... Initialize database
    // ... or Redis, or whatever you want

    Logger.info('↻ Inversify loading...');
    const container = await inversifyLoader();
    Logger.info('✌️ Inversify loaded');

    Logger.info('↻ Express loading...');
    const server = expressLoader({ container });
    Logger.info('✌️ Express loaded');

    return server;
  },
};
