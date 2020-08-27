import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { WorkflowHistories } from './WorkflowHistories';

@Entity('workflow_states')
export class WorkflowStates {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('mediumtext', { name: 'data', nullable: true })
  data: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('tinyint', { name: 'visible_by_agency', nullable: true, width: 1 })
  visibleByAgency: boolean | null;

  @Column('tinyint', { name: 'visible_by_celebrity', nullable: true, width: 1 })
  visibleByCelebrity: boolean | null;

  @OneToMany(() => WorkflowHistories, (workflowHistories) => workflowHistories.workflowState)
  workflowHistories: WorkflowHistories[];
}
