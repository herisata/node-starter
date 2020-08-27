import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Keywords } from './Keywords';

@Index('index_celebrities_keywords_on_celebrity_id_and_keyword_id', ['celebrityId', 'keywordId'], { unique: true })
@Index('fk_rails_c87113015b', ['keywordId'], {})
@Entity('celebrities_keywords')
export class CelebritiesKeywords {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;

  @Column('int', { name: 'celebrity_id' })
  celebrityId: number;

  @Column('int', { name: 'keyword_id' })
  keywordId: number;

  @Column('int', { name: 'count', default: () => "'1'" })
  count: number;

  @Column('tinyint', { name: 'indexed', width: 1, default: () => "'1'" })
  indexed: boolean;

  @ManyToOne(() => Keywords, (keywords) => keywords.celebritiesKeywords, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'keyword_id', referencedColumnName: 'id' }])
  keyword: Keywords;
}
