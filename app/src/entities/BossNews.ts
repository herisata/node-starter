import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_boss_news_on_celebrity_id_and_date', ['celebrityId', 'date'], {})
@Entity('boss_news')
export class BossNews {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('mediumtext', { name: 'abstract', nullable: true })
  abstract: string | null;

  @Column('datetime', { name: 'date', nullable: true })
  date: Date | null;

  @Column('varchar', { name: 'source', nullable: true, length: 191 })
  source: string | null;

  @Column('varchar', { name: 'source_url', nullable: true, length: 191 })
  sourceUrl: string | null;

  @Column('mediumtext', { name: 'url', nullable: true })
  url: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'title', nullable: true, length: 191 })
  title: string | null;
}
