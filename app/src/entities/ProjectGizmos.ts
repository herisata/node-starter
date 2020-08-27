import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_gizmos_on_project_id', ['projectId'], {})
@Entity('project_gizmos')
export class ProjectGizmos {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'project_id' })
  projectId: number;

  @Column('varchar', { name: 'type', length: 255 })
  type: string;

  @Column('varchar', { name: 'title', nullable: true, length: 191 })
  title: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('text', { name: 'data', nullable: true })
  data: string | null;
}
