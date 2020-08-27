import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_posts_configurations_on_project_id', ['projectId'], {})
@Entity('project_posts_configurations')
export class ProjectPostsConfigurations {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'project_id' })
  projectId: number;

  @Column('text', { name: 'include_ids', nullable: true })
  includeIds: string | null;

  @Column('text', { name: 'exclude_ids', nullable: true })
  excludeIds: string | null;
}
