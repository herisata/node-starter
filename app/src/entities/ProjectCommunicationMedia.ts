import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_communication_media')
export class ProjectCommunicationMedia {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('int', { name: 'project_communication_category_id', nullable: true })
  projectCommunicationCategoryId: number | null;

  @Column('varchar', { name: 'label', nullable: true, length: 191 })
  label: string | null;
}
