import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_profile_event_logs_on_eventable_id_and_eventable_type', ['eventableId', 'eventableType'], {})
@Index('index_profile_event_logs_on_user_id', ['userId'], {})
@Index('index_logs_on_admin_and_time', ['adminUserId', 'timestamp'], {})
@Index('index_profile_event_logs_on_name_and_timestamp', ['name', 'timestamp'], {})
@Index('index_profile_event_logs_on_admin_user_id_and_name_and_timestamp', ['adminUserId', 'name', 'timestamp'], {})
@Entity('profile_event_logs')
export class ProfileEventLogs {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('datetime', { name: 'timestamp' })
  timestamp: Date;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('mediumtext', { name: 'data', nullable: true })
  data: string | null;

  @Column('bigint', { name: 'admin_user_id', nullable: true })
  adminUserId: string | null;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('int', { name: 'profile_id', nullable: true })
  profileId: number | null;

  @Column('varchar', { name: 'eventable_type', nullable: true, length: 191 })
  eventableType: string | null;

  @Column('bigint', { name: 'eventable_id', nullable: true })
  eventableId: string | null;

  @Column('tinyint', { name: 'to_review', width: 1, default: () => "'0'" })
  toReview: boolean;
}
