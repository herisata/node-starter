import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_celebrity_notations_on_detailable_type_and_detailable_id', ['detailableType', 'detailableId'], {})
@Entity('celebrity_notations')
export class CelebrityNotations {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'detailable_id', nullable: true })
  detailableId: number | null;

  @Column('varchar', { name: 'detailable_type', nullable: true, length: 191 })
  detailableType: string | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('int', { name: 'engine_id', nullable: true })
  engineId: number | null;

  @Column('int', { name: 'note', nullable: true })
  note: number | null;

  @Column('mediumtext', { name: 'comment', nullable: true })
  comment: string | null;

  @Column('int', { name: 'created_by', nullable: true })
  createdBy: number | null;

  @Column('tinyint', { name: 'published', nullable: true, width: 1 })
  published: boolean | null;

  @Column('datetime', { name: 'created_at' })
  createdAt: Date;

  @Column('datetime', { name: 'updated_at' })
  updatedAt: Date;
}
