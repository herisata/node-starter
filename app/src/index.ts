import 'reflect-metadata'; // for typeorm & inversify

import config from 'config';
import loaders from 'loaders';
// import { getConnection } from 'typeorm';

async function startServer() {
  const PORT = config.api.port;

  // load everything the app needs
  const server = await loaders.initServer();

  server.build().listen(PORT, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);

    // for testing db connection
    // getConnection().createQueryRunner().query('show tables;').then(console.log);
  });
}

startServer();
