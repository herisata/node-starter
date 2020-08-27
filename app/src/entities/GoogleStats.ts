import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_google_stats_on_public_profile_id', ['publicProfileId'], {})
@Entity('google_stats')
export class GoogleStats {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'request_id', nullable: true, length: 191 })
  requestId: string | null;

  @Column('varchar', { name: 'fr_keyword', nullable: true, length: 191 })
  frKeyword: string | null;

  @Column('varchar', { name: 'en_keyword', nullable: true, length: 191 })
  enKeyword: string | null;

  @Column('int', { name: 'fr_result_count', nullable: true })
  frResultCount: number | null;

  @Column('int', { name: 'en_result_count', nullable: true })
  enResultCount: number | null;

  @Column('int', { name: 'fr_news_count', nullable: true })
  frNewsCount: number | null;

  @Column('int', { name: 'en_news_count', nullable: true })
  enNewsCount: number | null;

  @Column('int', { name: 'public_profile_id', nullable: true })
  publicProfileId: number | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
