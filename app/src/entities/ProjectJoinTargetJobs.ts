import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectTargetJobs } from './ProjectTargetJobs';

@Index('fk_rails_e4a0175dc0', ['projectTargetJobId'], {})
@Entity('project_join_target_jobs')
export class ProjectJoinTargetJobs {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'projectable_type', nullable: true, length: 191 })
  projectableType: string | null;

  @Column('int', { name: 'projectable_id' })
  projectableId: number;

  @Column('int', { name: 'project_target_job_id' })
  projectTargetJobId: number;

  @Column('int', { name: 'grade', nullable: true })
  grade: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => ProjectTargetJobs, (projectTargetJobs) => projectTargetJobs.projectJoinTargetJobs, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'project_target_job_id', referencedColumnName: 'id' }])
  projectTargetJob: ProjectTargetJobs;
}
