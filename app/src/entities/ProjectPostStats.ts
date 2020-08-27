import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_post_stats_on_project_id_and_post_id', ['projectId', 'postId'], { unique: true })
@Entity('project_post_stats')
export class ProjectPostStats {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'project_id' })
  projectId: number;

  @Column('varchar', { name: 'post_id', length: 255 })
  postId: string;

  @Column('text', { name: 'data', nullable: true })
  data: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
