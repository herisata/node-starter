import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ScInfluencerTweets } from './ScInfluencerTweets';

@Index('index_sc_kpi_histories_on_sc_influencer_tweet_id', ['scInfluencerTweetId'], {})
@Entity('sc_kpi_histories')
export class ScKpiHistories {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'sc_influencer_tweet_id', nullable: true })
  scInfluencerTweetId: number | null;

  @Column('int', { name: 'nb_clicks', nullable: true })
  nbClicks: number | null;

  @Column('int', { name: 'nb_retweets', nullable: true })
  nbRetweets: number | null;

  @Column('int', { name: 'nb_favorites', nullable: true })
  nbFavorites: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => ScInfluencerTweets, (scInfluencerTweets) => scInfluencerTweets.scKpiHistories, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'sc_influencer_tweet_id', referencedColumnName: 'id' }])
  scInfluencerTweet: ScInfluencerTweets;
}
