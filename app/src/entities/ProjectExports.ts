import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_exports_on_fingerprint_and_project', ['projectId', 'type', 'fingerprint'], { unique: true })
@Index('index_project_exports_on_type', ['type'], {})
@Entity('project_exports')
export class ProjectExports {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'project_id' })
  projectId: number;

  @Column('varchar', { name: 'type', length: 191 })
  type: string;

  @Column('varchar', { name: 'fingerprint', nullable: true, length: 191 })
  fingerprint: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;
}
