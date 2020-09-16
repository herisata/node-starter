import { Response } from 'express';
import { interfaces, controller, response, httpPost, requestBody, httpGet, queryParam } from 'inversify-express-utils';
import { inject } from 'inversify';
import { validate } from 'express-validation';

import TYPES from 'constants/types';
import { ProjectService } from 'services/ProjectServices';
import { Projects } from 'entities/Projects';

import validations from './validations';

@controller('/projects')
export class ProjectController implements interfaces.Controller {
  private readonly _projectService: ProjectService;

  public constructor(@inject(TYPES.ProjectService) profileService: ProjectService) {
    this._projectService = profileService;
  }

  /**
   * http://localhost:4000/projects?start=0&count=10
   */
  @httpGet('/')
  public async getProfilesList(
    @response() res: Response,
    @queryParam('start') _start: number,
    @queryParam('count') _count: number,
  ): Promise<Projects[]> {
    const start = _start || 0;
    const count = _count || 10;
    try {
      return this._projectService.find(start, count);
    } catch (e) {
      res.status(500);
      res.send(e.message);
      return [];
    }
  }

  /**
   * http://localhost:4000/projects/archive
   * {
   *    "id": "12"
   * }
   */
  @httpPost('/archive', validate(validations.projects.archive))
  public async archiveProject(@requestBody() body: { id: string }, @response() res: Response): Promise<void> {
    try {
      await this._projectService.archive(body.id).catch((reason) => {
        // catch is executed only if the promise is rejected with a reason
        // throw an error using that reason
        throw new Error(reason);
      });
      // if the promise is not rejected, return empty string
      res.send('');
    } catch (error) {
      // catch whatever error is thrown (in this case, the "no project with id: ${id}")
      res.status(500).json(error);
    }
  }
}
