import { AsyncContainerModule, Container } from 'inversify';
import { Repository, getRepository } from 'typeorm';

import { PublicProfiles } from 'entities/PublicProfiles';
import TYPES from 'constants/types';
import { ProfileService, ProfileServiceImpl } from 'services/ProfileService';

// !IMPORTANT: import each controller once in order to enable Inversion of Control
import 'controllers/HealthController';
import 'controllers/IndexController';

const repositoryModule = new AsyncContainerModule(async (bind) => {
  // repository
  bind<Repository<PublicProfiles>>(TYPES.PublicProfileRepository).toDynamicValue(() => getRepository(PublicProfiles));
});

const serviceModule = new AsyncContainerModule(async (bind) => {
  // services
  bind<ProfileService>(TYPES.ProfileService).to(ProfileServiceImpl);
});

export default async (): Promise<Container> => {
  const container = new Container();
  await container.loadAsync(repositoryModule, serviceModule);
  return container;
};
