import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('social_data')
export class SocialData {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'tweets_count_1_week', nullable: true })
  tweetsCount_1Week: number | null;

  @Column('int', { name: 'tweets_count_1_month', nullable: true })
  tweetsCount_1Month: number | null;

  @Column('int', { name: 'tweets_count_3_month', nullable: true })
  tweetsCount_3Month: number | null;

  @Column('int', { name: 'tweets_count_6_month', nullable: true })
  tweetsCount_6Month: number | null;

  @Column('int', { name: 'tweets_count', nullable: true })
  tweetsCount: number | null;

  @Column('float', {
    name: 'tweets_average_1_week',
    nullable: true,
    precision: 12,
  })
  tweetsAverage_1Week: number | null;

  @Column('float', {
    name: 'tweets_average_1_month',
    nullable: true,
    precision: 12,
  })
  tweetsAverage_1Month: number | null;

  @Column('float', {
    name: 'tweets_average_3_month',
    nullable: true,
    precision: 12,
  })
  tweetsAverage_3Month: number | null;

  @Column('float', {
    name: 'tweets_average_6_month',
    nullable: true,
    precision: 12,
  })
  tweetsAverage_6Month: number | null;

  @Column('float', { name: 'tweets_average', nullable: true, precision: 12 })
  tweetsAverage: number | null;

  @Column('int', { name: 'posts_count_1_week', nullable: true })
  postsCount_1Week: number | null;

  @Column('int', { name: 'posts_count_1_month', nullable: true })
  postsCount_1Month: number | null;

  @Column('int', { name: 'posts_count_3_month', nullable: true })
  postsCount_3Month: number | null;

  @Column('int', { name: 'posts_count_6_month', nullable: true })
  postsCount_6Month: number | null;

  @Column('int', { name: 'posts_count', nullable: true })
  postsCount: number | null;

  @Column('float', {
    name: 'posts_average_1_week',
    nullable: true,
    precision: 12,
  })
  postsAverage_1Week: number | null;

  @Column('float', {
    name: 'posts_average_1_month',
    nullable: true,
    precision: 12,
  })
  postsAverage_1Month: number | null;

  @Column('float', {
    name: 'posts_average_3_month',
    nullable: true,
    precision: 12,
  })
  postsAverage_3Month: number | null;

  @Column('float', {
    name: 'posts_average_6_month',
    nullable: true,
    precision: 12,
  })
  postsAverage_6Month: number | null;

  @Column('float', { name: 'posts_average', nullable: true, precision: 12 })
  postsAverage: number | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('float', {
    name: 'tweets_count_1_year',
    nullable: true,
    precision: 12,
  })
  tweetsCount_1Year: number | null;

  @Column('float', {
    name: 'tweets_average_1_year',
    nullable: true,
    precision: 12,
  })
  tweetsAverage_1Year: number | null;

  @Column('float', {
    name: 'posts_count_1_year',
    nullable: true,
    precision: 12,
  })
  postsCount_1Year: number | null;

  @Column('float', {
    name: 'posts_average_1_year',
    nullable: true,
    precision: 12,
  })
  postsAverage_1Year: number | null;
}
