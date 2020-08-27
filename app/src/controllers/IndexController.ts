import { Request, Response } from 'express';
import { interfaces, controller, httpGet, request, response } from 'inversify-express-utils';

@controller('/')
export class IndexController implements interfaces.Controller {
  @httpGet('/')
  public async index(@request() _req: Request, @response() res: Response): Promise<void> {
    res.send('Node, Express, TypeORM, Inversify + TypeScript Server');
  }
}
