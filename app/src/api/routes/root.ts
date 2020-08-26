import { Router, Request, Response } from 'express';

export default (app: Router) => {
  /**
   * Health Check endpoints
   */
  app.get('/status', (req: Request, res: Response) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });
  app.get('/', (req, res) => res.send('Express + TypeScript Server'));
};
