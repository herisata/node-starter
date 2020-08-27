import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_legacy_scores_on_public_profile_id', ['publicProfileId'], {})
@Entity('legacy_scores')
export class LegacyScores {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'public_profile_id' })
  publicProfileId: number;

  @Column('mediumtext', { name: 'feed_search', nullable: true })
  feedSearch: string | null;

  @Column('int', { name: 'google_search_count', nullable: true })
  googleSearchCount: number | null;
}
