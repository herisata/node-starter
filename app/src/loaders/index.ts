// Split the startup process into modules

import expressLoader from './express';
import databaseLoader from './database';
import Logger from './logger';

export default {
  init: async ({ expressApp }) => {
    await databaseLoader();
    Logger.info('✌️ Database loaded');

    await expressLoader({ app: expressApp });
    Logger.info('✌️ Express loaded');

    // ... more loaders can be put here

    // ... Initialize database
    // ... or Redis, or whatever you want
  },
};
