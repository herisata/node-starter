import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ScInfluencerTweets } from './ScInfluencerTweets';

@Index('index_sc_influencer_tweet_reaches_on_sc_influencer_tweet_id', ['scInfluencerTweetId'], {})
@Entity('sc_influencer_tweet_reaches')
export class ScInfluencerTweetReaches {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'sc_influencer_tweet_id', nullable: true })
  scInfluencerTweetId: number | null;

  @Column('date', { name: 'screenshoted_at_date', nullable: true })
  screenshotedAtDate: string | null;

  @Column('time', { name: 'screenshoted_at_hour', nullable: true })
  screenshotedAtHour: string | null;

  @Column('int', { name: 'prints', nullable: true })
  prints: number | null;

  @Column('int', { name: 'total_engagement', nullable: true })
  totalEngagement: number | null;

  @Column('int', { name: 'media_engagement', nullable: true })
  mediaEngagement: number | null;

  @Column('int', { name: 'details_opened', nullable: true })
  detailsOpened: number | null;

  @Column('int', { name: 'profile_clics', nullable: true })
  profileClics: number | null;

  @Column('int', { name: 'hashtag_clics', nullable: true })
  hashtagClics: number | null;

  @Column('int', { name: 'followed_after', nullable: true })
  followedAfter: number | null;

  @Column('int', { name: 'answers', nullable: true })
  answers: number | null;

  @Column('int', { name: 'likes', nullable: true })
  likes: number | null;

  @Column('int', { name: 'retweets', nullable: true })
  retweets: number | null;

  @Column('int', { name: 'link_clicks', nullable: true })
  linkClicks: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => ScInfluencerTweets, (scInfluencerTweets) => scInfluencerTweets.scInfluencerTweetReaches, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'sc_influencer_tweet_id', referencedColumnName: 'id' }])
  scInfluencerTweet: ScInfluencerTweets;
}
