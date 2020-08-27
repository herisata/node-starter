import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_tw_tweet_timings_on_celebrity_id', ['celebrityId'], {})
@Entity('tw_tweet_timings')
export class TwTweetTimings {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('mediumtext', { name: 'daily', nullable: true })
  daily: string | null;

  @Column('mediumtext', { name: 'hourly', nullable: true })
  hourly: string | null;

  @Column('int', { name: 'sample_count', nullable: true })
  sampleCount: number | null;

  @Column('mediumtext', { name: 'weekly', nullable: true })
  weekly: string | null;
}
