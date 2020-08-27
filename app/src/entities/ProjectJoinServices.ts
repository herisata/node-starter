import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectServices } from './ProjectServices';

@Index('fk_rails_225a3c9452', ['projectServiceId'], {})
@Entity('project_join_services')
export class ProjectJoinServices {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'projectable_type', nullable: true, length: 191 })
  projectableType: string | null;

  @Column('int', { name: 'projectable_id' })
  projectableId: number;

  @Column('int', { name: 'project_service_id', nullable: true })
  projectServiceId: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => ProjectServices, (projectServices) => projectServices.projectJoinServices, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'project_service_id', referencedColumnName: 'id' }])
  projectService: ProjectServices;
}
