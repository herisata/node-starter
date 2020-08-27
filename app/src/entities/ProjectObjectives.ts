import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectJoinObjectives } from './ProjectJoinObjectives';

@Entity('project_objectives')
export class ProjectObjectives {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => ProjectJoinObjectives, (projectJoinObjectives) => projectJoinObjectives.projectObjective)
  projectJoinObjectives: ProjectJoinObjectives[];
}
