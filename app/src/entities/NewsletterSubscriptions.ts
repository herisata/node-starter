import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_newsletter_subscriptions_on_user_id', ['userId'], {})
@Index('index_newsletter_subscriptions_on_unsubscribe_token', ['unsubscribeToken'], {})
@Index('index_newsletter_subscriptions_on_subscribed_to_stats_report', ['subscribedToStatsReport'], {})
@Entity('newsletter_subscriptions')
export class NewsletterSubscriptions {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('tinyint', { name: 'is_an_optin', width: 1, default: () => "'0'" })
  isAnOptin: boolean;

  @Column('varchar', { name: 'unsubscribe_token', nullable: true, length: 255 })
  unsubscribeToken: string | null;

  @Column('tinyint', {
    name: 'subscribed_to_stats_report',
    width: 1,
    default: () => "'0'",
  })
  subscribedToStatsReport: boolean;

  @Column('datetime', { name: 'subscribed_to_stats_report_at', nullable: true })
  subscribedToStatsReportAt: Date | null;

  @Column('datetime', {
    name: 'unsubscribed_from_stats_report_at',
    nullable: true,
  })
  unsubscribedFromStatsReportAt: Date | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
