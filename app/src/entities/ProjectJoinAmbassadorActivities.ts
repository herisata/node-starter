import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_join_ambassador_activities')
export class ProjectJoinAmbassadorActivities {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'project_ambassador_id', nullable: true })
  projectAmbassadorId: number | null;

  @Column('int', { name: 'project_ambassador_activity_id', nullable: true })
  projectAmbassadorActivityId: number | null;

  @Column('int', { name: 'presence_duration', nullable: true })
  presenceDuration: number | null;

  @Column('varchar', { name: 'comment', nullable: true, length: 191 })
  comment: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
