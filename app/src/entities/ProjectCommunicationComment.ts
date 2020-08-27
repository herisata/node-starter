import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_communication_comment')
export class ProjectCommunicationComment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'projectable_id', nullable: true })
  projectableId: number | null;

  @Column('varchar', { name: 'projectable_type', nullable: true, length: 191 })
  projectableType: string | null;

  @Column('int', { name: 'project_communication_category_id', nullable: true })
  projectCommunicationCategoryId: number | null;

  @Column('varchar', { name: 'content', nullable: true, length: 191 })
  content: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
