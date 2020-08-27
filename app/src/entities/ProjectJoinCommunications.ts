import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectCommunications } from './ProjectCommunications';

@Index('fk_rails_9631ec4693', ['projectCommunicationId'], {})
@Entity('project_join_communications')
export class ProjectJoinCommunications {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'projectable_type', nullable: true, length: 191 })
  projectableType: string | null;

  @Column('int', { name: 'projectable_id' })
  projectableId: number;

  @Column('int', { name: 'project_communication_id' })
  projectCommunicationId: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => ProjectCommunications, (projectCommunications) => projectCommunications.projectJoinCommunications, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'project_communication_id', referencedColumnName: 'id' }])
  projectCommunication: ProjectCommunications;
}
