import express from 'express';
import 'reflect-metadata'; // for typeorm

import config from 'config';
import loaders from 'loaders';
import { getConnection } from 'typeorm';

async function startServer() {
  const app = express();
  const PORT = config.api.port;

  await loaders.init({ expressApp: app });

  app.listen(PORT, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);

    // for testing db connection
    // getConnection().createQueryRunner().query('show tables;').then(console.log);
  });
}

startServer();
