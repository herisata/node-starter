import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('twitter_scores')
export class TwitterScores {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', {
    name: 'followers_count',
    nullable: true,
    default: () => "'0'",
  })
  followersCount: number | null;

  @Column('int', {
    name: 'friends_count',
    nullable: true,
    default: () => "'0'",
  })
  friendsCount: number | null;

  @Column('int', { name: 'listed_count', nullable: true, default: () => "'0'" })
  listedCount: number | null;

  @Column('int', {
    name: 'favourites_count',
    nullable: true,
    default: () => "'0'",
  })
  favouritesCount: number | null;

  @Column('int', {
    name: 'statuses_count',
    nullable: true,
    default: () => "'0'",
  })
  statusesCount: number | null;

  @Column('int', {
    name: 'followers_retweet_count',
    nullable: true,
    default: () => "'0'",
  })
  followersRetweetCount: number | null;

  @Column('int', {
    name: 'followers_favorite_count',
    nullable: true,
    default: () => "'0'",
  })
  followersFavoriteCount: number | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('float', {
    name: 'score',
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  score: number | null;

  @Column('int', {
    name: 'tweet_crawl_count',
    nullable: true,
    default: () => "'0'",
  })
  tweetCrawlCount: number | null;

  @Column('float', {
    name: 'average_tweets_per_day',
    nullable: true,
    precision: 12,
    default: () => "'0'",
  })
  averageTweetsPerDay: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
