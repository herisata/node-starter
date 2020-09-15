import { EntityRepository, Repository } from 'typeorm';
import { AdminUsers } from 'entities/AdminUsers';

export interface AdminUserRepository extends Repository<AdminUsers> {
  findByName(firstName: string, lastName: string): Promise<AdminUsers>;
}

@EntityRepository(AdminUsers)
export class AdminUserRepositoryImpl extends Repository<AdminUsers> implements AdminUserRepository {
  findByName(firstName: string, lastName: string): Promise<AdminUsers> {
    return this.findOne({ firstName, lastName });
  }
}
