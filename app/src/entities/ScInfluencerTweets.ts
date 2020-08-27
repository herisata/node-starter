import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ScInfluencerTweetReaches } from './ScInfluencerTweetReaches';
import { ScPropositions } from './ScPropositions';
import { ScKpiHistories } from './ScKpiHistories';

@Index('index_sc_influencer_tweets_on_sc_proposition_id', ['scPropositionId'], {})
@Entity('sc_influencer_tweets')
export class ScInfluencerTweets {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'sc_proposition_id', nullable: true })
  scPropositionId: number | null;

  @Column('mediumtext', { name: 'content', nullable: true })
  content: string | null;

  @Column('varchar', { name: 'id_online', nullable: true, length: 191 })
  idOnline: string | null;

  @Column('datetime', { name: 'published_at', nullable: true })
  publishedAt: Date | null;

  @Column('varchar', { name: 'tracking_link', nullable: true, length: 191 })
  trackingLink: string | null;

  @Column('int', { name: 'nb_target_confirmed', nullable: true })
  nbTargetConfirmed: number | null;

  @Column('int', { name: 'nb_target_broadcasted', nullable: true })
  nbTargetBroadcasted: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'photo_tweet', nullable: true, length: 191 })
  photoTweet: string | null;

  @Column('tinyint', { name: 'no_link', nullable: true, width: 1 })
  noLink: boolean | null;

  @Column('tinyint', { name: 'no_photo', nullable: true, width: 1 })
  noPhoto: boolean | null;

  @Column('datetime', { name: 'planned_at', nullable: true })
  plannedAt: Date | null;

  @OneToMany(() => ScInfluencerTweetReaches, (scInfluencerTweetReaches) => scInfluencerTweetReaches.scInfluencerTweet)
  scInfluencerTweetReaches: ScInfluencerTweetReaches[];

  @ManyToOne(() => ScPropositions, (scPropositions) => scPropositions.scInfluencerTweets, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'sc_proposition_id', referencedColumnName: 'id' }])
  scProposition: ScPropositions;

  @OneToMany(() => ScKpiHistories, (scKpiHistories) => scKpiHistories.scInfluencerTweet)
  scKpiHistories: ScKpiHistories[];
}
