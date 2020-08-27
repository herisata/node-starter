import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WorkflowStates } from './WorkflowStates';

@Index('index_workflow_histories_on_workflow_state_id', ['workflowStateId'], {})
@Index('index_workflow_histories_on_user_id', ['userId'], {})
@Entity('workflow_histories')
export class WorkflowHistories {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'workflow_state_id', nullable: true })
  workflowStateId: number | null;

  @Column('int', { name: 'historisable_id', nullable: true })
  historisableId: number | null;

  @Column('varchar', { name: 'historisable_type', nullable: true, length: 191 })
  historisableType: string | null;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => WorkflowStates, (workflowStates) => workflowStates.workflowHistories, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'workflow_state_id', referencedColumnName: 'id' }])
  workflowState: WorkflowStates;
}
