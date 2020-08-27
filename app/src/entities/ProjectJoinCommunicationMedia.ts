import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_join_communication_media')
export class ProjectJoinCommunicationMedia {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('int', { name: 'project_communication_medium_id', nullable: true })
  projectCommunicationMediumId: number | null;

  @Column('int', { name: 'projectable_id', nullable: true })
  projectableId: number | null;

  @Column('varchar', { name: 'projectable_type', nullable: true, length: 191 })
  projectableType: string | null;
}
