import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_project_targetings_on_project_id', ['projectId'], {})
@Entity('project_targetings')
export class ProjectTargetings {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'project_id' })
  projectId: number;

  @Column('text', { name: 'params' })
  params: string;

  @Column('text', { name: 'raw_string', nullable: true })
  rawString: string | null;

  @Column('tinyint', { name: 'sendable', width: 1, default: () => "'0'" })
  sendable: boolean;

  @Column('int', { name: 'size', nullable: true })
  size: number | null;

  @Column('datetime', { name: 'sent_at', nullable: true })
  sentAt: Date | null;
}
