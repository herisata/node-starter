import express from 'express';
import config from './config';
import loaders from './loaders';

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
  });
}

startServer();
