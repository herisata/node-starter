import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_social_network_stats_on_social_network_account_id', ['socialNetworkAccountId'], { unique: true })
@Entity('social_network_stats')
export class SocialNetworkStats {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'social_network_account_id', unique: true })
  socialNetworkAccountId: number;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('bigint', { name: 'community_count', nullable: true })
  communityCount: string | null;

  @Column('int', { name: 'content_1_month', nullable: true })
  content_1Month: number | null;

  @Column('int', { name: 'content_3_month', nullable: true })
  content_3Month: number | null;

  @Column('int', { name: 'engagement_1_month', nullable: true })
  engagement_1Month: number | null;

  @Column('int', { name: 'engagement_3_month', nullable: true })
  engagement_3Month: number | null;

  @Column('int', { name: 'likes_3_month', nullable: true })
  likes_3Month: number | null;

  @Column('int', { name: 'dislikes_3_month', nullable: true })
  dislikes_3Month: number | null;

  @Column('int', { name: 'comments_3_month', nullable: true })
  comments_3Month: number | null;

  @Column('bigint', { name: 'views_3_month', nullable: true })
  views_3Month: string | null;

  @Column('int', { name: 'shares_3_month', nullable: true })
  shares_3Month: number | null;

  @Column('int', { name: 'content_all_time', nullable: true })
  contentAllTime: number | null;
}
