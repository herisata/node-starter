import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectJoinServices } from './ProjectJoinServices';

@Entity('project_services')
export class ProjectServices {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => ProjectJoinServices, (projectJoinServices) => projectJoinServices.projectService)
  projectJoinServices: ProjectJoinServices[];
}
