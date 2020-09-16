import { Request, Response } from 'express';
import { interfaces, controller, httpGet, request, response, requestParam, queryParam } from 'inversify-express-utils';
import { inject } from 'inversify';

import TYPES from 'constants/types';
import { ProfileService } from 'services/ProfileService';
import { PublicProfiles } from 'entities/PublicProfiles';

@controller('/')
export class IndexController implements interfaces.Controller {
  private readonly _profileService: ProfileService;

  public constructor(@inject(TYPES.ProfileService) profileService: ProfileService) {
    this._profileService = profileService;
  }

  /**
   * http://localhost:4000/
   */
  @httpGet('/')
  public async index(@request() _req: Request, @response() res: Response): Promise<void> {
    res.send('Node, Express, TypeORM, Inversify + TypeScript Server');
  }

  // Some examples
  /**
   * http://localhost:4000/hello
   */
  @httpGet('hello')
  public async hello(): Promise<string> {
    // can return string
    return 'Hello World';
  }

  /**
   * http://localhost:4000/hello/Jean
   */
  @httpGet('hello/:name')
  public async helloName(@response() res: Response, @requestParam('name') nameParam: string): Promise<void> {
    // can use response object
    res.send(`Hello ${nameParam}`);
  }

  /**
   * http://localhost:4000/time
   */
  @httpGet('time')
  public async getTime(): Promise<Record<string, unknown>> {
    // can return object
    const date = new Date();
    return {
      message: 'u no have a watch?',
      time: date,
      details: {
        time: date.getTime(),
        iso: date.toISOString(),
        utc: date.toUTCString(),
      },
    };
  }

  /**
   * http://localhost:4000/profiles?start=0&count=10
   */
  @httpGet('profiles')
  public async getProfilesList(
    @response() res: Response,
    @queryParam('start') _start: number,
    @queryParam('count') _count: number,
  ): Promise<PublicProfiles[]> {
    const start = _start || 0;
    const count = _count || 10;
    try {
      return this._profileService.find(start, count);
    } catch (e) {
      res.status(500);
      res.send(e.message);
      return [];
    }
  }
}
