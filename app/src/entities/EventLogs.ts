import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_event_logs_on_target_id_and_context_and_event', ['targetId', 'context', 'event'], {})
@Entity('event_logs')
export class EventLogs {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'context', nullable: true, length: 191 })
  context: string | null;

  @Column('varchar', { name: 'event', nullable: true, length: 191 })
  event: string | null;

  @Column('int', { name: 'target_id' })
  targetId: number;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('mediumtext', { name: 'data', nullable: true })
  data: string | null;

  @Column('datetime', { name: 'timestamp' })
  timestamp: Date;
}
