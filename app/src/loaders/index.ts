// Split the startup process into modules

import expressLoader from './express';
import Logger from './logger';

export default {
  init: async ({ expressApp }) => {
    await expressLoader({ app: expressApp });
    Logger.info('✌️ Express loaded');

    // ... more loaders can be put here

    // ... Initialize database
    // ... or Redis, or whatever you want
  },
};
