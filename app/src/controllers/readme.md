# Controllers

## Express route controllers for all the endpoints of the app

- contains the entrypoint of all API calls
- uses `inversify` to declare `paths`, `methods` and the injection of dependencies

## DON'T:

- put business logic inside controllers
- pass request/response object to the service layer

## DO:

- delegate business logic to the service layer
- handle HTTP request mapping and response codes here

# IMPORTANT:

> ## All controllers should be declared once in /loaders/inversify for express to recognize it

# How to create a new endpoint?

Let's take as an example the endpoint to archive a project. (`POST /projects/archive {"id": "123"}`)

## Identify the controller to use

Each controller handles a particular path, in our case it should be `/projects`

See controller filenames and their `@controller('path')` decorator, it represents the path on which the controller listens to, and every methods of the controller decorated with `@httpget, @httpPost,...` are accessible as a sub path of it.

> See for yourself if you should create a new controller or use an existing one

In our case, we needed to create `/controllers/ProjectController`.

```typescript
import { interfaces, controller } from 'inversify-express-utils';

@controller('/projects')
export class ProjectController implements interfaces.Controller {}
```

As you can see, our controller should implement `interfaces.Controller`, and be decorated with `@controller('/path-to-handle')`

> IMPORTANT: For `inversify` and `express` to load that controller at app start, it should be imported once in `/loader/inversify`

```typescript
// !IMPORTANT: import each controller once in order to enable Inversion of Control
import 'controllers/HealthController';
import 'controllers/IndexController';
import 'controllers/ProjectController'; // <== HERE
```

## Create the handler

We want to have an handler for `/projects/archive`, and it should handle only `POST` requests.  
Inside the controller, create a new method for handling that.

```typescript
@controller('/projects')
export class ProjectController implements interfaces.Controller {
  /**
   * http://localhost:4000/projects/archive
   * {
   *    "id": "12"
   * }
   */
  @httpPost('/archive')
  public async archiveProject(@requestBody() body: { id: string }, @response() res: Response): Promise<void> {
    try {
      // send dummy response for now
      res.send('');
    } catch (error) {
      // catch whatever error is thrown (in this case, the "no project with id: ${id}")
      res.status(500).json(error);
    }
  }
}
```

The important parts are the decorators `@httpPost, @requestBody and @reponse`. [See here](https://github.com/inversify/inversify-express-utils#decorators) for details on them and the other possible decorators

## Do the business logic

The process to archive a project is independent of the controller and may be used elsewhere in the app, we need to put that logic inside a specific service.  
Let create `services/ProjectService` to handle all business logic related to projects.

```typescript
import { injectable } from 'inversify';

import { Projects } from 'entities/Projects';

// It's a good practice to separate into interface and implementation
export interface ProjectService {
  archive(id: string): Promise<void>;
}

@injectable() // <== to allow us to inject it inside the controller later
export class ProjectServiceImpl implements ProjectService {
  async archive(id: string): Promise<void> {}
}
```

As we created an `@injectable`, we should define at what time should it be injected.

- Define a TYPE (an unique identifier) for that `@injectable`  
  inside `constants/types`

```javascript
const TYPES = {
  // repositories
  PublicProfileRepository: Symbol('PublicProfileRepository'),
  ProjectRepository: Symbol('ProjectRepository'),

  // services
  ProfileService: Symbol('ProfileService'),
  ProjectService: Symbol('ProjectService'), // <== HERE
};

export default TYPES;
```

- Bind the TYPE to the injectable
  inside `loaders/inversify`

```javascript
import TYPES from 'constants/types';
import { ProjectService, ProjectServiceImpl } from 'services/ProjectServices';
// ...
const serviceModule = new AsyncContainerModule(async (bind) => {
  // services
  bind < ProfileService > TYPES.ProfileService.to(ProfileServiceImpl);
  bind < ProjectService > TYPES.ProjectService.to(ProjectServiceImpl); // <== HERE
});
// ...
```

- Inject it inside the controller

`/controlers/ProjectController`

```javascript
@controller('/projects')
export class ProjectController implements interfaces.Controller {
  private readonly _projectService: ProjectService; // a private member to hold the injected service

  // inject it as a constructor argument, using the @inject decorator and the TYPE of the injectable
  public constructor(@inject(TYPES.ProjectService) profileService: ProjectService) {
    this._projectService = profileService; // store it in the private member
  }
}
```

- Use it

`/controlers/ProjectController`

```typescript
import { Response } from 'express';
import { interfaces, controller, response, httpPost, requestBody, httpGet, queryParam } from 'inversify-express-utils';
import { inject } from 'inversify';

import TYPES from 'constants/types';
import { ProjectService } from 'services/ProjectServices';
import { Projects } from 'entities/Projects';

@controller('/projects')
export class ProjectController implements interfaces.Controller {
  private readonly _projectService: ProjectService;

  public constructor(@inject(TYPES.ProjectService) profileService: ProjectService) {
    this._projectService = profileService;
  }
  @httpPost('/archive')
  public async archiveProject(@requestBody() body: { id: string }, @response() res: Response): Promise<void> {
    try {
      await this._projectService.archive(body.id).catch((reason) => {
        // <== HERE
        //catch is executed only if the promise is rejected with a reason
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
```

It's ready to be called

## But let's finish the business logic first

What's left to do in the service is to use the repository layer to manipulate database objects

- Define and inject the repository
  > `typeorm` provides a default repository for every entity, which is already pretty stuffed with everythinh we may need. There is no need to create a custom repository unless there is a specific need.  
  > To get the repository for a specific entity: `typeorm.getRepository(EntityA)`

In our case:  
`/constants/types`

```javascript
// ...
const TYPES = {
  // repositories
  PublicProfileRepository: Symbol('PublicProfileRepository'),
  ProjectRepository: Symbol('ProjectRepository'), // <== HERE

  // services
  ProfileService: Symbol('ProfileService'),
  ProjectService: Symbol('ProjectService'),
};
// ...
```

`/loaders/inversify`

```javascript
// ...
const repositoryModule = new AsyncContainerModule(async (bind) => {
  // repository
  bind <
    Repository <
    PublicProfiles >> TYPES.PublicProfileRepository.toDynamicValue(() => getRepository(PublicProfiles));
  bind < Repository < Projects >> TYPES.ProjectRepository.toDynamicValue(() => getRepository(Projects)); // <==HERE
});
// ...
```

`services/ProjectService`

```javascript

@injectable()
export class ProjectServiceImpl implements ProjectService {
  private readonly _projectRepository: Repository<Projects>;

  constructor(@inject(TYPES.ProjectRepository) projectRepository: Repository<Projects>) { // <== HERE
    this._projectRepository = projectRepository;
  }

// ...

  async archive(id: string): Promise<void> {
    const existingProject = await this._projectRepository.findOne(id); // already existing method from the typeorm repository

    if (!existingProject) return Promise.reject(`No project found for id ${id}`);

    // if the project exists in DB
    existingProject.state = 'ARCHIVED';
    existingProject.endAt = new Date(new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }));

    // Save the project using the repository
    this._projectRepository.save(existingProject);
  }
}

```

See [typeorm repository simple doc](https://typeorm.io/#/working-with-repository) and [typeorm repository API](https://github.com/typeorm/typeorm/blob/master/docs/repository-api.md#repository-api)
