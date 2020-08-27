import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_social_account_data_on_account', ['socialNetworkAccountId'], {
  unique: true,
})
@Entity('social_account_data')
export class SocialAccountData {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'social_network_account_id', unique: true })
  socialNetworkAccountId: number;

  @Column('text', { name: 'insights', nullable: true })
  insights: string | null;

  @Column('text', { name: 'likers_insights', nullable: true })
  likersInsights: string | null;

  @Column('text', { name: 'followers_insights', nullable: true })
  followersInsights: string | null;

  @Column('text', { name: 'langs', nullable: true })
  langs: string | null;

  @Column('text', { name: 'top_countries', nullable: true })
  topCountries: string | null;

  @Column('text', { name: 'themes', nullable: true })
  themes: string | null;

  @Column('text', { name: 'interests', nullable: true })
  interests: string | null;
}
