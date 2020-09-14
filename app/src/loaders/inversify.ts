import { AsyncContainerModule, Container } from 'inversify';
import { Repository, getRepository } from 'typeorm';

import { PublicProfiles } from 'entities/PublicProfiles';
import { Projects } from 'entities/Projects';
import TYPES from 'constants/types';
import { ProfileService, ProfileServiceImpl } from 'services/ProfileService';
import { ProjectService, ProjectServiceImpl } from 'services/ProjectServices';

// !IMPORTANT: import each controller once in order to enable Inversion of Control
import 'controllers/HealthController';
import 'controllers/IndexController';
import 'controllers/ProjectController';

const repositoryModule = new AsyncContainerModule(async (bind) => {
  // repository
  bind<Repository<PublicProfiles>>(TYPES.PublicProfileRepository).toDynamicValue(() => getRepository(PublicProfiles));
  bind<Repository<Projects>>(TYPES.ProjectRepository).toDynamicValue(() => getRepository(Projects));
});

const serviceModule = new AsyncContainerModule(async (bind) => {
  // services
  bind<ProfileService>(TYPES.ProfileService).to(ProfileServiceImpl);
  bind<ProjectService>(TYPES.ProjectService).to(ProjectServiceImpl);
});

export default async (): Promise<Container> => {
  const container = new Container();
  await container.loadAsync(repositoryModule, serviceModule);
  return container;
};
