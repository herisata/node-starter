import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('celeb_sn_period', ['celebrityId', 'snLabel', 'period'], {
  unique: true,
})
@Index('index_social_ranking_stats_on_celebrity_id', ['celebrityId'], {})
@Entity('social_ranking_stats')
export class SocialRankingStats {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'sn_label', nullable: true, length: 191 })
  snLabel: string | null;

  @Column('varchar', { name: 'period', nullable: true, length: 191 })
  period: string | null;

  @Column('int', { name: 'community_count', nullable: true })
  communityCount: number | null;

  @Column('int', { name: 'content_count', nullable: true })
  contentCount: number | null;

  @Column('float', {
    name: 'daily_content_average',
    nullable: true,
    precision: 12,
  })
  dailyContentAverage: number | null;

  @Column('bigint', { name: 'view_count', nullable: true })
  viewCount: string | null;

  @Column('int', { name: 'average_engagement', nullable: true })
  averageEngagement: number | null;

  @Column('int', { name: 'average_view_count', nullable: true })
  averageViewCount: number | null;

  @Column('bigint', { name: 'absolute_engagement', nullable: true })
  absoluteEngagement: string | null;

  @Column('float', {
    name: 'average_engagement_rate',
    nullable: true,
    precision: 12,
  })
  averageEngagementRate: number | null;
}
