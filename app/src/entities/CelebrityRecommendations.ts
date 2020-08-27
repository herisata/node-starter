import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('celebrity_recommendations')
export class CelebrityRecommendations {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'propale_id', nullable: true })
  propaleId: number | null;

  @Column('int', { name: 'celebrity_id', nullable: true })
  celebrityId: number | null;

  @Column('mediumtext', { name: 'why', nullable: true })
  why: string | null;

  @Column('varchar', { name: 'how_much', nullable: true, length: 191 })
  howMuch: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
