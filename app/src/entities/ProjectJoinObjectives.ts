import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectObjectives } from './ProjectObjectives';

@Index('fk_rails_e610504a64', ['projectObjectiveId'], {})
@Entity('project_join_objectives')
export class ProjectJoinObjectives {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'projectable_type', nullable: true, length: 191 })
  projectableType: string | null;

  @Column('int', { name: 'projectable_id' })
  projectableId: number;

  @Column('int', { name: 'project_objective_id', nullable: true })
  projectObjectiveId: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => ProjectObjectives, (projectObjectives) => projectObjectives.projectJoinObjectives, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'project_objective_id', referencedColumnName: 'id' }])
  projectObjective: ProjectObjectives;
}
