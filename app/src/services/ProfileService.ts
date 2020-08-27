import { injectable, inject } from 'inversify';
import { Repository } from 'typeorm';

import { PublicProfiles } from 'entities/PublicProfiles';
import TYPES from 'constants/types';

export interface ProfileService {
  find(start: number, count: number): Promise<PublicProfiles[]>;
}

@injectable()
export class ProfileServiceImpl implements ProfileService {
  private readonly _profileRepository: Repository<PublicProfiles>;

  constructor(@inject(TYPES.PublicProfileRepository) profileRepository: Repository<PublicProfiles>) {
    this._profileRepository = profileRepository;
  }

  async find(start: number, count: number): Promise<PublicProfiles[]> {
    return this._profileRepository.find({
      skip: start,
      take: count,
    });
  }
}
