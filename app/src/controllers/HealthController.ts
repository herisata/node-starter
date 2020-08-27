import { Request, Response } from 'express';
import { interfaces, controller, httpGet, request, response } from 'inversify-express-utils';

@controller('/alive')
export class HealthController implements interfaces.Controller {
  @httpGet('/')
  public async index(@request() _req: Request, @response() res: Response): Promise<void> {
    try {
      res.status(200).json({
        service: 'node-api',
        dbConnection: true,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
