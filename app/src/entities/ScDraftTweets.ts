import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ScRoots } from './ScRoots';

@Index('index_sc_draft_tweets_on_sc_root_id', ['scRootId'], {})
@Entity('sc_draft_tweets')
export class ScDraftTweets {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'sc_root_id', nullable: true })
  scRootId: number | null;

  @Column('mediumtext', { name: 'content', nullable: true })
  content: string | null;

  @Column('varchar', { name: 'link', nullable: true, length: 191 })
  link: string | null;

  @Column('varchar', { name: 'hashtags', nullable: true, length: 191 })
  hashtags: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('mediumtext', { name: 'photo_description', nullable: true })
  photoDescription: string | null;

  @Column('tinyint', {
    name: 'no_link',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  noLink: boolean | null;

  @ManyToOne(() => ScRoots, (scRoots) => scRoots.scDraftTweets, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'sc_root_id', referencedColumnName: 'id' }])
  scRoot: ScRoots;
}
