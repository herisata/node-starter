import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectJoinCommunications } from './ProjectJoinCommunications';

@Entity('project_communications')
export class ProjectCommunications {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(
    () => ProjectJoinCommunications,
    (projectJoinCommunications) => projectJoinCommunications.projectCommunication,
  )
  projectJoinCommunications: ProjectJoinCommunications[];
}
