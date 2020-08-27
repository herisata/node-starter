import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectJoinTargetAges } from './ProjectJoinTargetAges';

@Entity('project_target_ages')
export class ProjectTargetAges {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => ProjectJoinTargetAges, (projectJoinTargetAges) => projectJoinTargetAges.projectTargetAge)
  projectJoinTargetAges: ProjectJoinTargetAges[];
}
