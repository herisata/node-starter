import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_movies_on_celebrity_id', ['celebrityId'], {})
@Index('index_movies_on_id', ['id'], {})
@Entity('movies')
export class Movies {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('varchar', { name: 'clip', nullable: true, length: 191 })
  clip: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('mediumtext', { name: 'title', nullable: true })
  title: string | null;
}
