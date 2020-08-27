import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('index_rating_histories_on_celebrity_id', ['celebrityId'], {})
@Entity('rating_histories')
export class RatingHistories {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('double', { name: 'value', nullable: true, precision: 22 })
  value: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('datetime', { name: 'rating_updated_at', nullable: true })
  ratingUpdatedAt: Date | null;

  @Column('varchar', { name: 'rating_type', nullable: true, length: 191 })
  ratingType: string | null;
}
