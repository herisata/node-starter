import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_activity_logs_on_activity_type_and_created_at', ['activityType', 'createdAt'], {})
@Index('index_activity_logs_on_user_id_and_activity_type_and_target_type', ['userId', 'activityType', 'targetType'], {})
@Index('index_activity_logs_targetable_and_activity', ['targetId', 'targetType', 'activityType'], {})
@Entity('activity_logs')
export class ActivityLogs {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'activity_type' })
  activityType: number;

  @Column('int', { name: 'target_id' })
  targetId: number;

  @Column('varchar', { name: 'target_type', length: 191 })
  targetType: string;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('text', { name: 'url', nullable: true })
  url: string | null;

  @Column('text', { name: 'target_changes', nullable: true })
  targetChanges: string | null;
}
