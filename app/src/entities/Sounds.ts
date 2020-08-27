import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_sounds_on_celebrity_id', ['celebrityId'], {})
@Index('index_sounds_on_id', ['id'], {})
@Entity('sounds')
export class Sounds {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('varchar', { name: 'track', nullable: true, length: 191 })
  track: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
