import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('terms')
export class Terms {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'type_terms', nullable: true, length: 191 })
  typeTerms: string | null;

  @Column('tinyint', { name: 'active', nullable: true, width: 1 })
  active: boolean | null;

  @Column('varchar', { name: 'title', nullable: true, length: 191 })
  title: string | null;

  @Column('mediumtext', { name: 'content_fr', nullable: true })
  contentFr: string | null;

  @Column('datetime', { name: 'published_at', nullable: true })
  publishedAt: Date | null;

  @Column('datetime', { name: 'closed_at', nullable: true })
  closedAt: Date | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'typeable_id', nullable: true })
  typeableId: number | null;

  @Column('varchar', { name: 'typeable_type', nullable: true, length: 191 })
  typeableType: string | null;
}
