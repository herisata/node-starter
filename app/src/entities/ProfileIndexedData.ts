import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_profile_indexed_data_on_profile', ['publicProfileId'], {
  unique: true,
})
@Entity('profile_indexed_data')
export class ProfileIndexedData {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('int', { name: 'public_profile_id', unique: true })
  publicProfileId: number;

  @Column('text', { name: 'social_data', nullable: true })
  socialData: string | null;

  @Column('text', { name: 'langs', nullable: true })
  langs: string | null;

  @Column('float', { name: 'credibility', nullable: true, precision: 12 })
  credibility: number | null;

  @Column('text', { name: 'themes', nullable: true })
  themes: string | null;

  @Column('text', { name: 'influencer_interests', nullable: true })
  influencerInterests: string | null;
}
