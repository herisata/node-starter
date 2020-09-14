import { injectable, inject } from 'inversify';
import { Repository } from 'typeorm';

import { Projects } from 'entities/Projects';
import TYPES from 'constants/types';

export interface ProjectService {
  find(start: number, count: number): Promise<Projects[]>;
  archive(id: string): Promise<void>;
}

@injectable()
export class ProjectServiceImpl implements ProjectService {
  private readonly _projectRepository: Repository<Projects>;

  constructor(@inject(TYPES.ProjectRepository) projectRepository: Repository<Projects>) {
    this._projectRepository = projectRepository;
  }

  async find(start: number, count: number): Promise<Projects[]> {
    return this._projectRepository.find({
      skip: start,
      take: count,
    });
  }

  async archive(id: string): Promise<void> {
    const existingProject = await this._projectRepository.findOne(id);
    if (!existingProject) return Promise.reject(`No project found for id ${id}`);
    existingProject.state = 'ARCHIVED'; // TODO: Get all project states and put in separate enum
    existingProject.endAt = new Date(new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })); // TODO: use a datetime library (momentjs)
    this._projectRepository.save(existingProject);
  }
}
