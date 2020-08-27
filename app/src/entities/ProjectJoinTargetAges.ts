import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectTargetAges } from './ProjectTargetAges';

@Index('fk_rails_9e51fa5333', ['projectTargetAgeId'], {})
@Entity('project_join_target_ages')
export class ProjectJoinTargetAges {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'projectable_type', nullable: true, length: 191 })
  projectableType: string | null;

  @Column('int', { name: 'projectable_id', nullable: true })
  projectableId: number | null;

  @Column('int', { name: 'project_target_age_id', nullable: true })
  projectTargetAgeId: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => ProjectTargetAges, (projectTargetAges) => projectTargetAges.projectJoinTargetAges, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'project_target_age_id', referencedColumnName: 'id' }])
  projectTargetAge: ProjectTargetAges;
}
