import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('celebrity_prices')
export class CelebrityPrices {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('int', { name: 'engine_id', nullable: true })
  engineId: number | null;

  @Column('int', { name: 'for_celebrity', nullable: true })
  forCelebrity: number | null;

  @Column('int', { name: 'for_bandc', nullable: true })
  forBandc: number | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
