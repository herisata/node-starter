import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_celebrity_indexations_on_celebrity_id', ['celebrityId'], {})
@Index('index_celebrity_indexations_on_engine_id', ['engineId'], {})
@Index('index_celebrity_indexations_on_celebrity_id_and_engine_id', ['celebrityId', 'engineId'], {})
@Entity('celebrity_indexations')
export class CelebrityIndexations {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('int', { name: 'engine_id', nullable: true })
  engineId: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('tinyint', { name: 'contacted', nullable: true, width: 1 })
  contacted: boolean | null;
}
